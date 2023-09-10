import Joi from "joi";

const contactSchema = Joi.object({
  email: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกข้อมูล",
  }),
});

const validateContact = (input) => {
  const { error } = contactSchema.validate(input);
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateContact;
