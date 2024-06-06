import * as joi from 'joi';

export default {
  register: joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(6).max(30).required(),
      firstName: joi.string().min(3).max(100).required(),
      lastName: joi.string().min(3).max(100).required(),
  }),
  login: joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
  }),
  updateMe: joi.object({
      firstName: joi.string().min(3).max(100).required(),
      lastName: joi.string().min(3).max(100).required(),
  })
};