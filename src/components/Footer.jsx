import { therapist, specialties } from "../data/content";
import { getGenericWhatsAppUrl } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">{therapist.name}</div>
        <p className="footer-title">{therapist.title}</p>
        <p className="footer-specialties">{specialties.join(" • ")}</p>
        <a
          href={getGenericWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <WhatsAppIcon size={18} />
          {therapist.whatsappDisplay}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
