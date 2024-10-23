"use client";
import { Formik, Form, Field, FormikProps } from "formik";
import { useDispatch } from "react-redux";
import { notifySend } from "@/store/slice/slice";

import IUsers from "./users.interface";
import Schema from "./schema";

export default function ContactForm() {
  const dispatch = useDispatch();

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
          resetForm();
          dispatch(notifySend());
        }}
      >
        {(props: FormikProps<IUsers>) => {
          const { values, errors, touched, handleChange, handleSubmit } = props;

          return (
            <div>
              <Form
                className="text-black sm:pd-0 md:p-5 lg:p-10"
                onSubmit={handleSubmit}
              >
                <div className="text-center">
                  <h2 className="text-md md:text-xl font-bold leading-9 tracking-tight text-[#063852]">
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
                    <div>{errors.name}</div>
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
                    <div>{errors.phone}</div>
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
                    <div>{errors.email}</div>
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
                    <div>{errors.subject}</div>
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
                    type="text"
                    name="message"
                    onChange={handleChange}
                    values={values.message}
                    className="block w-full h-20 rounded-md border-0 p-1.5 bg-white text-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  {touched.message && errors.message ? (
                    <div>{errors.message}</div>
                  ) : null}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-md bg-red-700 px-20 py-2 text-sm font-bold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-white hover:border hover:border-slate-100 mt-5"
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
