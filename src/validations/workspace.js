import Joi from "joi";

export const getWsVal = Joi.object({
  id: Joi
  .number()
.integer()
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
  .required()
})

export const putWsVal = Joi.object({
  id: Joi
  .number()
.integer()
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