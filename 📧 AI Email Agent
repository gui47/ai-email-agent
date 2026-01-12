📧 AI Email Agent

O AI Email Agent é um micro-serviço de automação que utiliza inteligência artificial para gerar e enviar e-mails automaticamente, podendo ser integrado a sistemas SaaS, CRMs, painéis administrativos e bots.

Ele foi projetado para funcionar como o motor de envio inteligente do projeto AI SaaS Panel.

🚀 O que ele faz

Gera textos de e-mail usando IA (OpenAI)

Envia e-mails automaticamente via SMTP (Gmail ou outro provedor)

Recebe requisições HTTP para disparo de e-mails

Pode ser integrado a qualquer sistema web ou bot

Funciona 24/7 quando hospedado em nuvem

🧠 Arquitetura
[SaaS Panel / CRM / Bot]
           ↓
     AI Email Agent
           ↓
    OpenAI + SMTP Email


Este projeto não possui interface gráfica, ele funciona como um serviço de backend.

📦 Tecnologias

Node.js

Express

OpenAI API

Nodemailer

Dotenv

⚙️ Requisitos

Node.js 18+

Conta OpenAI com API Key

Conta de e-mail SMTP (ex: Gmail com App Password)

🔐 Configuração (.env)

Crie um arquivo .env na raiz do projeto:

OPENAI_KEY=SUACHAVEOPENAI
EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=senha_de_app_gmail

📥 Instalação
npm install

▶️ Iniciar o servidor
node index.js


O serviço ficará online normalmente na porta 3000.

📤 Exemplo de envio de e-mail
POST http://localhost:3000/send-email

{
  "to": "cliente@email.com",
  "subject": "Contato",
  "prompt": "Escreva um email profissional oferecendo nossos serviços."
}

🔗 Integração com o AI SaaS Panel

Este projeto é o motor de envio e geração de e-mails do:

👉 https://github.com/gui47/ai-saas-platform

(O painel consome este serviço para automatizar disparos com IA.)

🏗️ Usos comuns

SaaS de email marketing

Bots de WhatsApp

CRM automático

Escritórios de advocacia

Prospecção automática

Follow-up de vendas
