import { getProjectVal, postProjectVal, putProjectVal } from '../validations/project.js';
import { Projects } from '../models/index.js';
import { idVal } from '../validations/generic.js';
import { findById } from '../helpers/find.js';

export const getProject = async (req, res) => {
  try {
    await getProjectVal.validateAsync(req.query);

    let where = {};
    Object.entries(req.query).map(([key, value]) => {
      if (value) {
        where[key] = value;
      }
    });

    const [result, total] = await Promise.all([
      Projects.findAll({
        where,
      }),
      Projects.count({ where }),
    ]);

    res.status(200).send({ result, total });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postProject = async (req, res) => {
  try {
    const { name } = req.body;

    await postProjectVal.validateAsync(req.body);

    const result = await Projects.create({
      name,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const putProject = async (req, res) => {
  try {
    const {
      body: { name },
      params: { id },
    } = req;

    await putProjectVal.validateAsync({ id, name });

    const result = await Projects.update(
      {
        name,
      },
      { where: { id } },
    ).then(() => findById('Projects', id));

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error?.message);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    await idVal.validateAsync(id);

    await Projects.destroy({ where: { id } });

    res.status(200).send({ message: `Success on delete User ${id}` });
  } catch (error) {
    res.status(500).send({ error: error?.message });
  }
};
