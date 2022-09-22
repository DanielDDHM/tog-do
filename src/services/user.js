import { Op } from "sequelize";
import { findById, findByEmail } from "../helpers/find.js";
import User from "../models/user.js";
import { getUserVal, postUserVal, putUserVal } from "../validations/user.js";

export const getUser = async (req, res) => {
  try {
    const { id, email } = req.query;

    await getUserVal.validateAsync(req.query);

    const params =
      id && !email
        ? { id }
        : email && !id
        ? { email }
        : email && id
        ? { [Op.or]: { email, id } }
        : {};

    const [result, total] = await Promise.all([
      User.findAll({
        where: params,
      }),
      User.count({ where: params }),
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

    const user = await findByEmail("User", email);

    if (user) {
      throw new Error("User Exists");
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

    await putUserVal.validateAsync({ name, email, password, photo, id });

    const result = await User.update(
      {
        name,
        email,
        password,
        photo,
      },
      { where: { id } },
    );

    res.status(200).send({ message: `User ${result} has Been Updated` });
  } catch (error) {
    res.status(500).send(error?.message);
  }
};

export const patchUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await findById("User", id);

    const result = await User.update({ isActive: !user.isActive }, { where: { id } });

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

    const user = await findById("User", id);

    if (!user) {
      throw new Error("User Dont Exists");
    }

    await User.destroy({ where: { id } });

    res.status(200).send({ message: `Success on delete User ${id}` });
  } catch (error) {
    res.status(500).send({ error: error?.message });
  }
};
