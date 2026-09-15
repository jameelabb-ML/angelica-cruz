import { therapist } from "../data/content";
import { getGenericWhatsAppUrl } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";

function Contact() {
  return (
    <section id="contato" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Contato</span>
          <h2>Entre em contato</h2>
        </div>

        <div className="contact-grid">
          <Reveal as="div" className="contact-card" delay={0}>
            <div className="contact-card-icon">
              <WhatsAppIcon size={22} />
            </div>
            <h3>WhatsApp</h3>
            <a href={getGenericWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              {therapist.whatsappDisplay}
            </a>
          </Reveal>

          <Reveal as="div" className="contact-card" delay={90}>
            <div className="contact-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="3.5"
                  y="3.5"
                  width="17"
                  height="17"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3>Instagram</h3>
            <p className="muted">Em breve</p>
          </Reveal>

          <Reveal as="div" className="contact-card" delay={180}>
            <div className="contact-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h3>Localização</h3>
            <p className="muted">Em breve</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
