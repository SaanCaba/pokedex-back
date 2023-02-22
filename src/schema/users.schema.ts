import Joi from "joi";

const username = Joi.string().min(3).max(20);

export const userSchema = Joi.object({
  username: username.required(),
});
