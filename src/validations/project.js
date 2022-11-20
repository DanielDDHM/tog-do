import Joi from "joi";

export const postProjectVal = Joi.object({
  name: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required(),
})

export const getProjectVal = Joi.object({
  id: Joi
  .number()
  .integer()
  .optional(),
  name: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .optional(),
});

export const putProjectVal = Joi.object({
  id: Joi
  .number()
  .integer()
  .optional(),
  name: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .optional(),
});