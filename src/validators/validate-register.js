import Joi from "joi";

const registerSchema = Joi.object({
  fullName: Joi.string().trim().required().messages({
    "string.empty": "fullName is required.",
  }),
  userName: Joi.string().trim().required().messages({
    "string.empty": "userName is required.",
  }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.pattern.base": "Password must be at least 6 characters",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "string.empty": "Confirm password is required.",
    "any.only": "Password and Confirm password did not match",
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateRegister;
