import Joi from "joi";

export default Joi.object()
  .keys({
    platform: Joi.string().required(),
    name: Joi.string().required(),

    client_id: Joi.string().required(),
    client_secret: Joi.string().required(),

    username: Joi.string(),
    password: Joi.string(),

    access_token: Joi.string(),
    refresh_token: Joi.string()
  })
  .unknown()
  .with("username", "password");
