import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "213c232b9afecd",
      pass: "424203677dd2af"
    }
  });

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Luis Lucas <luis@semper-ti.com",
      subject: "Novo feedback",
      html: `
        <h1>Novo feedback</h1>
        <p>
            <strong>Tipo:</strong> ${type}
        </p>
        <p>
            <strong>Comentário:</strong> ${comment}
        </p>
        <p>
            <strong>Screenshot:</strong> ${screenshot}
        </p>
        `,
  })

  return res.status(201).json(feedback);
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
