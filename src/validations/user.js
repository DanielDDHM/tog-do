import Joi from "joi";

export const getUserVal = Joi.object({
  id: Joi
  .number()
.integer()
  .optional(),
  email: Joi.string()
  .email({minDomainSegments: 2, tlds: ['com', 'net']})
  .optional(),
});

export const postUserVal = Joi.object({
  name: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required(),
  email: Joi.string()
  .email({minDomainSegments: 2, tlds: ['com', 'net']})
  .required(),
  password: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .required(),
  photo: Joi.string()
  .min(3)
  .max(30)
  .optional(),
  theme: Joi.string()
  .min(3)
  .max(30)
  .optional(),
})

export const putUserVal = Joi.object({
  id: Joi
  .number()
  .required(),
  name: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .optional(),
  email: Joi.string()
  .email({minDomainSegments: 2, tlds: ['com', 'net']})
  .optional(),
  password: Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .optional(),
  photo: Joi.string()
  .min(3)
  .max(30)
  .optional(),
  theme: Joi.string()
  .min(3)
  .max(30)
  .optional()
})