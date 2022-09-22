import Joi from "joi";

const idVal = Joi.object({
  id: Joi
  .number()
  .required(),
});

export {idVal}