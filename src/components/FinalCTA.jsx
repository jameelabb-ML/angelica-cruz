import { getGenericWhatsAppUrl } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";

function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal as="div" className="final-cta">
          <h2>Vamos conversar?</h2>
          <p>
            Dar o primeiro passo pode parecer difícil, mas você não precisa fazer isso
            sozinho. Fale comigo pelo WhatsApp e vamos conversar sobre como posso te ajudar.
          </p>
          <a
            href={getGenericWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} />
            Falar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCTA;
