import { findById, findByEmail } from '../helpers/index.js';
import { User } from '../models/index.js';
import { getUserVal, postUserVal, putUserVal, idVal } from '../validations/index.js';

export const getUser = async (req, res) => {
  try {
    await getUserVal.validateAsync(req.query);

    let where = {};
    Object.entries(req.query).map(([key, value]) => {
      if (value) {
        where[key] = value;
      }
    });

    const [result, total] = await Promise.all([
      User.findAll({
        where,
      }),
      User.count({ where }),
    ]);

    res.status(200).send({ result, total });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, email, password, photo } = req.body;

    await postUserVal.validateAsync(req.body);

    const user = await findByEmail('User', email);

    if (user) {
      throw new Error('User Exists');
    }

    const result = await User.create({
      name,
      email,
      password,
      photo,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error?.message });
  }
};

export const putUser = async (req, res) => {
  try {
    const {
      body: { name, email, password, photo },
      params: { id },
    } = req;

    const data = { name, email, password, photo, id: Number(id) };

    await putUserVal.validateAsync(data);

    const result = await User.update(
      {
        name,
        email,
        password,
        photo,
      },
      { where: { id } },
    ).then(() => findById('User', id));

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error?.message);
  }
};

export const patchUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    await idVal.validateAsync(id);

    const user = await findById('User', id);

    const result = await User.update({ isActive: !user.isActive }, { where: { id } }).then(() =>
      findById('User', id),
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error?.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    await idVal.validateAsync(id);

    const user = await findById('User', id);

    if (!user) {
      throw new Error('User Dont Exists');
    }

    await User.destroy({ where: { id } });

    res.status(200).send({ message: `Success on delete User ${id}` });
  } catch (error) {
    res.status(500).send({ error: error?.message });
  }
};
