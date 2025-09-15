const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { checkBody } = require("../modules/checkBody");

router.post("/", async (req, res) => {
  const requiredFields = ["name", "email", "subject", "message"];

  if (!checkBody(req.body, requiredFields)) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  const { name, email, subject, message } = req.body;

  console.log("Incoming contact:", { name, email, subject });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // Vérifie d'abord la connexion SMTP (avec await !)
    await transporter.verify();

    // Envoie l'email
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
    });
    res.status(200).json({ message: "Message envoyé avec succès." });
  } catch (error) {
    console.error("Mailer error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
  }
});

module.exports = router;
