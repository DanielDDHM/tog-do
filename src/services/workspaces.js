import { getWsVal, idVal, postWsVal, putWsVal } from '../validations/index.js';
import { Workspace } from '../models/index.js';
import { findById } from '../helpers/index.js';

export const getWorkspace = async (req, res) => {
  try {
    await getWsVal.validateAsync(req.query);

    let where = {}
    Object.entries(req.query).map(([key, value]) => {
      if (value) {where[key] = value}
    })

    const [result, total] = await Promise.all([
      Workspace.findAll({
        where
      }),
      Workspace.count({
        where
      }),
    ]);

    res.status(200).send({ result, total });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const postWorkspace = async (req, res) => {
  try {
    const { name, backgroundImage, boardType } = req.body;

    await postWsVal.validateAsync(req.body);

    const result = await Workspace.create({
      name,
      background_image: backgroundImage,
      board_type: boardType,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const putWorkspace = async (req, res) => {
  try {
    const {
      body: { name, backgroundImage, boardType },
      params: { id },
    } = req;

    await putWsVal.validateAsync({ name, backgroundImage, boardType, id });

    const result = await Workspace.update(
      {
        name,
        background_image: backgroundImage,
        board_type: boardType,
      },
      { where: { id } },
    );

    res.status(200).send({ message: `Workspace ${result} has Been Updated` });
  } catch (error) {
    res.status(500).send(error?.message);
  }
};

export const patchWorkspace = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    await idVal.validateAsync(id);

    const workspace = await findById('Workspace', id);

    const result = await Workspace.update({ isActive: !workspace.isActive }, { where: { id } });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error?.message);
  }
};

export const deleteWorkspace = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    await idVal.validateAsync(id);

    const workspace = await findById('Workspace', id);

    if (!workspace) {
      throw new Error('User Dont Exists');
    }

    await Workspace.destroy({ where: { id } });

    res.status(200).send({ message: `Success on delete Workspace ${id}` });
  } catch (error) {
    res.status(500).send({ error: error?.message });
  }
};
