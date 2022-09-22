/* eslint-disable no-unused-vars */
import { User, Workspace } from "../models/index.js";

const findById = async (mod, value) => {
  const result = await eval(mod).findOne({
    where: {
      id: value,
    },
  });

  return result;
};

const findByEmail = async (mod, value) => {
  const query = {
    email: value,
  };

  const result = await eval(mod).findOne({
    where: query,
  });

  return result;
};

export { findById, findByEmail };
