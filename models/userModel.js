import Joi from 'joi';
export const userSchema = Joi.object({
  username: Joi.string().min(2).max(100).required(),
  password: Joi.string().min(8).max(100).required()
});