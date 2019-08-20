const Joi = require("@hapi/joi");

module.exports = Joi.object()
  .keys({
    platform: Joi.string().required(),
    name: Joi.string().required(),

    username: Joi.string().required(),
    password: Joi.string().required(),

    access_token: Joi.string(),
    refresh_token: Joi.string()
  })
  .unknown()
  .with("username", "password");
