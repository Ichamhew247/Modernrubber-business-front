import Joi from "joi";

const loginSchema = Joi.object({
  userName: Joi.string().trim().required().messages({
    "string.empty": " ",
  }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      "string.pattern.base": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
    }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateLogin;
