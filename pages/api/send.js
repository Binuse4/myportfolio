import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import React from 'react';
import { EmailTemplate } from "@/components/EmailTemplate"
import NextCors from 'nextjs-cors';

export default async (req, res) => {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: '*', // Attention : définir '*' (tous les domaines) peut être dangereux, spécifiez exactement quels domaines sont autorisés
    optionsSuccessStatus: 200,
  });
  
  const body = await req.body;
  console.log(req.body);

  const { message, email , subject } = body;

  // Check if the required fields are present
  if (!message || !email) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `Acme - Porfolio <onboarding@resend.dev>`, 
      to: "binuse.adissin@groupe-esigelec.org", 
      subject: "Message from Portfolio",
      react: EmailTemplate({ email, subject, message}), 
    });

    if (error) {
      res.status(400).json({ message: "Email sending failed", error });
      return;
    }

    res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
}