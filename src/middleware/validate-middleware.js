const Joi = require("joi");

function validateData(req, res, next) {
  const schema = Joi.object({
    topic: Joi.string().min(3).max(30).required(),
    text: Joi.string().min(10).max(40).required(),
  });

  const validateResult = schema.validate(req.body);
  if (validateResult.error) {
    return res.status(400).json({ status: "bad parameters" });
  }
  next();
}

function validateDataPut(req, res, next) {
  const schema = Joi.object({
    topic: Joi.string().min(3).max(30),
    text: Joi.string().min(10).max(40),
  });

  const validateResult = schema.validate(req.body);
  if (validateResult.error) {
    return res.status(400).json({ status: "bad parameters" });
  }
  next();
}

module.exports = { validateData, validateDataPut };
