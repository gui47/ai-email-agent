require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const gerarEmail = require("./emailAgent");
const transporter = require("./mailer");

const app = express();
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { para, comando } = req.body;

  const texto = await gerarEmail(comando);

  await transporter.sendMail({
    from: `"AI Agent" <${process.env.EMAIL_USER}>`,
    to: para,
    subject: "Mensagem automática da IA",
    text: texto
  });

  res.json({ status: "Email enviado", texto });
});

app.listen(3000, () => {
  console.log("🚀 AI Email Agent ONLINE na porta 3000");
});