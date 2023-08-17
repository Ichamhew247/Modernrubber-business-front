import Joi from "joi";

const registerSchema = Joi.object({
  fullName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกชื่อ-นามสกุล",
  }),
  userName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกชื่อผู้ใช้",
  }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      "string.empty": "กรุณาใส่รหัสผ่านที่ต้องการ",
      "string.pattern.base": "รหัสผ่านต้องมีอย่างน้อย 6 ตัว",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "string.empty": "กรุณาใส่รหัสผ่านอีกครั้ง",
    "any.only": "รหัสผ่านไม่ตรงกัน",
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
