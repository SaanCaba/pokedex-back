import Joi from "joi";
const password = Joi.string().min(4).alphanum().required();
const username = Joi.string().min(3).max(20);
export const authSchema = Joi.object({
    username: username.required(),
    password: password.required(),
});
//# sourceMappingURL=auth.schema.js.map