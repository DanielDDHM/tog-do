import { Op } from "sequelize";
import { User } from "../models/user.js";
import { getUserVal, postUserVal } from "../validations/user.js";

export const getUser = async (req, res) => {
  try {
    const { id, email } = req.query;

    await getUserVal.validateAsync(req.query);

    const query = id || email;

    const result = query
      ? await User.findAll({
          where: id && !email ? { id } : email && !id ? { email } : { [Op.or]: { email, id } },
        })
      : await User.findAll();

    res.status(200).send(result);
  } catch (error) {
    res.status(error.StatusCode || 500).send(error);
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, email, password, photo } = req.body;

    await postUserVal.validateAsync(req.body);

    const result = await User.create({
      name,
      email,
      password,
      photo,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(error.StatusCode || 500).send(error);
  }
};

export const putUser = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(error.StatusCode || 500).send(error?.messages);
  }
};

export const deleteUser = async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(error.StatusCode || 500).send(error?.messages);
  }
};
