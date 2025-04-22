"use server";
import nodemailer from "nodemailer";
import { ISendEmail } from "./types/sendEmail.interface";

const USER = process.env.SMTP_SERVER_USER;
const PASS = process.env.SMTP_SERVER_PASS;
const HOST = process.env.SMTP_SERVER_HOST;
const RECEIVER = process.env.SMTP_EMAIL_RECEIVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: HOST,
  port: 587,
  secure: true,
  auth: {
    user: USER,
    pass: PASS,
  },
});

export const sendEmail = async (data: ISendEmail) => {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    return;
  }

  let { email, sendFrom, subject, html } = data;

  const info = await transporter.sendMail({
    from: `${sendFrom}<${email}>`,
    to: RECEIVER,
    subject: subject,
    html: html,
  });
  return info;
};
