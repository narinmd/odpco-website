"use server";

import nodemailer from "nodemailer";
import { validateConsultationForm } from "@/utils/validation";

export async function submitConsultationForm(prevState, formData) {
  const fullName = formData.get("fullName") || "";
  const email = formData.get("email") || "";
  const phone = formData.get("phone") || "";
  const companyName = formData.get("companyName") || "";
  const serviceType = formData.get("serviceType") || "NETWORK_DATACENTER";
  const message = formData.get("message") || "";

  const currentValues = {
    fullName,
    email,
    phone,
    companyName,
    serviceType,
    message,
  };

  const errors = validateConsultationForm(currentValues);
  if (errors.length > 0) {
    return { success: false, errors, previousValues: currentValues };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.DESTINATION_EMAIL,
      replyTo: email,
      subject: `New Consultation Request from: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Consultation Request Submitted</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${companyName || "N/A"}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
          <p><strong>Message:</strong><br/> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      errors: null,
      previousValues: {},
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      errors: ["Failed to send message. Please try again later."],
      previousValues: currentValues,
    };
  }
}
