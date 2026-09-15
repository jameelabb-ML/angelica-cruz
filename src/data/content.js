export const therapist = {
  name: "Angélica Cruz",
  title: "Psicoterapeuta",
  whatsapp: "5511999331499",
  whatsappDisplay: "+55 11 99933-1499",
  image: "/images/angelica-cruz.jpg",
};

export const specialties = ["Casais", "Família", "Relacionamentos", "Autoestima"];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#contato" },
];

export const services = [
  {
    title: "Terapia de Casais",
    description:
      "Um espaço de apoio para trabalhar desafios do relacionamento e melhorar a comunicação entre o casal.",
  },
  {
    title: "Terapia Familiar",
    description:
      "Um ambiente acolhedor para compreender as dinâmicas familiares e melhorar a comunicação entre todos.",
  },
  {
    title: "Relacionamentos",
    description:
      "Apoio para compreender padrões emocionais e construir relacionamentos mais saudáveis.",
  },
  {
    title: "Autoestima",
    description:
      "Um espaço para autoconhecimento, confiança e uma relação mais saudável com você mesmo.",
  },
];

export const serviceOptions = services.map((service) => service.title);

export const steps = [
  {
    number: "01",
    title: "Preencha o formulário",
    description: "Informe seus dados e escolha a opção de atendimento desejada.",
  },
  {
    number: "02",
    title: "Envie sua solicitação",
    description: "Ao finalizar, seus dados serão organizados automaticamente em uma mensagem.",
  },
  {
    number: "03",
    title: "Continue pelo WhatsApp",
    description:
      "A mensagem será aberta no WhatsApp de Angélica para que vocês possam conversar e confirmar o atendimento.",
  },
];
