import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.pcexpert.ba",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PW,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
