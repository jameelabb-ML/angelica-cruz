import { therapist } from "../data/content";

function formatDate(isoDate) {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}/${month}/${year}`;
}

export function buildBookingMessage({
  nome,
  whatsapp,
  email,
  tipoAtendimento,
  data,
  horario,
  mensagem,
}) {
  const linhas = [
    "Olá, Angélica! Gostaria de solicitar um atendimento.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `E-mail: ${email ? email : "não informado"}`,
    `Tipo de atendimento: ${tipoAtendimento}`,
    `Data preferida: ${formatDate(data)}`,
    `Horário preferido: ${horario}`,
    "",
    "Mensagem:",
    mensagem ? mensagem : "nenhuma mensagem adicional",
    "",
    "Enviei estas informações pelo formulário do site e gostaria de conversar sobre o atendimento.",
  ];

  return linhas.join("\n");
}

export function buildWhatsAppUrl(message, phone = therapist.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getGenericWhatsAppUrl() {
  const message = "Olá, Angélica! Gostaria de conversar sobre um atendimento.";
  return buildWhatsAppUrl(message);
}
