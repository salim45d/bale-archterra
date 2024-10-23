import { object, string } from "yup";

const Schema = object({
  name: string().min(3, "First name must be 3 characters").required("Required"),
  email: string().email("Invalid format").required("Required"),
  phone: string()
    .required("Required")
    .matches(
      /^(?:\+62)?\s?\(?\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}[-.\s]?\d{1,5}$/,
      "Phone number not valid"
    ),
  subject: string().required("Required"),
  message: string()
    .required("Required")
    .min(20, "Message must be 20 characters"),
});

export default Schema;
