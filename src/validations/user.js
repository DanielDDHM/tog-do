import Joi from "joi";

const getUserVal = Joi.object({
  id: Joi.string()
  .min(3)
  .max(30)
  .optional(),
  email: Joi.string()
  .email({minDomainSegments: 2, tlds: ['com', 'net']})
  .optional(),
});

const postUserVal = Joi.object({
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
  .required(false),
})

export {getUserVal, postUserVal}