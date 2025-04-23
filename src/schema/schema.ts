import { object, string } from "yup";

const Schema = object({
  name: string().label("Name").min(3).required(),
  email: string().label("Email").email().required(),
  phone: string()
    .label("Phone")
    .required()
    .matches(
      /^(?:\+62)?\s?\(?\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}[-.\s]?\d{1,5}$/,
      "Phone number not valid"
    ),
  subject: string().label("Subject").min(10).max(45).required(),
  message: string().label("Message").required().min(50).max(700),
});

export default Schema;
