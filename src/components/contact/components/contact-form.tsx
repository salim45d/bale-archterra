"use client";
import { Formik, Form, Field, FormikProps } from "formik";
import { useDispatch } from "react-redux";
import { notify } from "@/store/slice/notify";
import { sendEmail } from "@/api/sendEmail";
import IMailBox from "@/types/mailBox.interface";
import Schema from "@/schema/schema";

export default function ContactForm() {
  const dispatch = useDispatch();

  const emailHandler = async (data: IMailBox) => {
    const emailHTML = `<div>
                          <h4 style="text-align: left;">Hey Bale Archterra,</h4>
                          <p style="text-align: justify;">
                            Woowee! My name is <strong>${data.name}</strong>. I would like to discussing new projects, creative ideas or opportunities to be part of <strong>Bale Archterra</strong> visions. I wanted to recap our discussion about <strong>${data.subject}</strong> and express my enthusiasm about the potential collaboration. I wanted to follow up with an email to provide a information and summary of the key points:
                          </p>
                          <p style="text-align: justify;">
                            ${data.message}
                          </p>
                          <p style="text-align: justify;">
                            I believe these points could be incredibly valuable for our next new projects, creative ideas or opportunities. Feel free to get in touch with me via email to <a href="mailto:${data.email}" style="text-decoration: none; font-weight: bold; color: black;">${data.email}</a> or call me back via <a href="tel:+62${data.phone}" style="text-decoration: none; font-weight: bold; color: black;">+62${data.phone}</a>. Looking forward to taking the next steps. Let’s schedule a quick call to discuss this further. Please let me know your availability.
                          </p>
                          <p style="text-align: left;  margin-bottom: 25px;  margin-top: 50px;">Best Regards,</p>
                          <p style="text-align: left;">${data.name}</p>
                        </div>`;

    const response = await sendEmail({
      email: data.email,
      sendFrom: data.name,
      subject: data.subject,
      html: emailHTML,
    });

    if (response?.messageId) {
      dispatch(notify("Message Submitted Successfully"));
    } else {
      dispatch(notify("Failed to send message"));
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          id: 0,
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, { resetForm }) => {
          emailHandler(values);
          resetForm();
        }}
      >
        {(props: FormikProps<IMailBox>) => {
          const { values, errors, touched, handleChange, handleSubmit } = props;

          return (
            <div>
              <Form className="text-black" onSubmit={handleSubmit}>
                <div className="text-center lg:pt-10 lg:px-10">
                  <h2 className="text-lg md:text-xl font-bold leading-9 tracking-tight text-[#063852]">
                    Contact us
                  </h2>
                  <p className="text-sm md:text-md mt-2 mb-10">
                    Use our contact form for all information requests or contact
                    us directly using the contact information below.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    aria-label="name"
                    className="block text-sm  leading-6 text-black"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    values={values.name}
                    className="block w-full rounded-md border-0 p-1.5 bg-white text-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  {touched.name && errors.name ? (
                    <div className="text-red-700 text-xs">{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    aria-label="phone"
                    className="block text-sm font-lg leading-6 text-black mt-2"
                  >
                    Phone
                  </label>
                  <Field
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    values={values.phone}
                    className="block w-full rounded-md border-0 p-1.5 bg-white text-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  {touched.phone && errors.phone ? (
                    <div className="text-red-700 text-xs">{errors.phone}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    aria-label="email"
                    className="block text-sm font-lg leading-6 text-black mt-2"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    values={values.email}
                    className="block w-full rounded-md border-0 p-1.5 bg-white text-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-700 text-xs">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    aria-label="subject"
                    className="block text-sm font-lg leading-6 text-black mt-2"
                  >
                    Subject
                  </label>
                  <Field
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    values={values.subject}
                    className="block w-full rounded-md border-0 p-1.5 bg-white text-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  {touched.subject && errors.subject ? (
                    <div className="text-red-700 text-xs">{errors.subject}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    aria-label="message"
                    className="block text-sm font-lg leading-6 text-black mt-2"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    name="message"
                    onChange={handleChange}
                    values={values.message}
                    className="block w-full rounded-md border-0 p-1.5 bg-white text-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  {touched.message && errors.message ? (
                    <div className="text-red-700 text-xs">{errors.message}</div>
                  ) : null}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-md bg-red-700 py-4 w-full md:w-80 font-bold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-5"
                  >
                    Send
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
