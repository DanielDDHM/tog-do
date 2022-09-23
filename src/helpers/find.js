/* eslint-disable no-unused-vars */
import { User, Workspace } from '../models/index.js';

export const findById = async (mod, value) => {
  try {
    console.log(value);

    const result = await eval(mod).findOne({
      where: {
        id: value,
      },
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const findByEmail = async (mod, value) => {
  try {
    const query = {
      email: value,
    };

    const result = await eval(mod).findOne({
      where: query,
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
