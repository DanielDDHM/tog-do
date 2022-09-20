import Joi from "joi";

const userValidation = Joi.object({
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
  .alphanum()
  .min(3)
  .max(30)
  .required(false),
})

export default userValidation