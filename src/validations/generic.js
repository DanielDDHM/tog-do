import Joi from "joi";

export const idVal = Joi
.number()
.required();
