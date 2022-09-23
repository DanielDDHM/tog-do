import Joi from "joi";

export const getWsVal = Joi.object({
  id: Joi
  .number()
  .optional(),
  user: Joi
  .number()
  .optional()
})

export const postWsVal = Joi.object({
  name: Joi
  .string()
  .required(),
  backgroundImage: Joi
  .string()
  .required(),
  boardType: Joi
  .string()
  .required(),
  starred: Joi
  .boolean()
  .optional(),
})

export const putWsVal = Joi.object({
  id: Joi
  .number()
  .optional(),
  name: Joi
  .string()
  .required(),
  backgroundImage: Joi
  .string()
  .required(),
  boardType: Joi
  .string()
  .required(),
  starred: Joi
  .boolean()
  .optional(),
})