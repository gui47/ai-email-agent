const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function gerarEmail(comando) {
  const resposta = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "Você é um assistente que escreve emails profissionais prontos para envio." },
      { role: "user", content: comando }
    ]
  });

  return resposta.choices[0].message.content;
}

module.exports = gerarEmail;