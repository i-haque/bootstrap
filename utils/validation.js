const Joi = require('joi');

function validateUser(userObject) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  }).length(2);
  const { error } = schema.validate(userObject);
  if (error) return error.details[0].message;
}

function validateLodge(lodgeObject) {
  const schema = Joi.object({
    checkin: Joi.date().required(),
    checkout: Joi.date().greater(Joi.ref('checkin')).required(),
    adults: Joi.number().required(),
    children: Joi.number().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).required(),
    rooms: Joi.number().required(),
  }).length(7);
  const { error } = schema.validate(lodgeObject);
  if (error) return error.details[0].message;
}

module.exports = { validateUser, validateLodge };
