import { getGenericWhatsAppUrl } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp-wrap">
      <span className="floating-whatsapp-bubble">Fale comigo no WhatsApp 👋</span>
      <a
        href={getGenericWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;
