# Angélica Cruz — Site de Psicoterapia

Site em React (JavaScript puro, sem TypeScript) para Angélica Cruz, psicoterapeuta.
O objetivo principal é levar visitantes a iniciar uma conversa pelo WhatsApp.

## Rodando o projeto

```bash
npm install
npm run dev
```

## Foto profissional

Substitua o placeholder em `public/images/angelica-cruz.jpg` pela foto real de
Angélica. Basta sobrescrever o arquivo mantendo exatamente esse nome e caminho.

## Configuração

Informações como nome, título e número de WhatsApp ficam centralizadas em
[`src/data/content.js`](src/data/content.js), no objeto `therapist`.

## Estrutura

```text
src/
├── components/       # Componentes de cada seção do site
├── data/content.js   # Configuração e textos (fonte única da verdade)
├── utils/whatsapp.js # Geração da mensagem e do link do WhatsApp
├── styles/global.css # Estilos globais
├── App.jsx
└── main.jsx
```
