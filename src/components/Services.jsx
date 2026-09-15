import { services } from "../data/content";
import Reveal from "./Reveal";

const icons = [
  // Terapia de Casais
  <path
    key="casais"
    d="M8.5 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-11 6c.6-2.6 2.6-4 4.5-4 .9 0 1.7.24 2.5.7M20 18.5c-.6-2.6-2.6-4-4.5-4-.9 0-1.7.24-2.5.7"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    fill="none"
  />,
  // Terapia Familiar
  <path
    key="familia"
    d="M4 20v-6.2L12 6l8 7.8V20h-5v-5H9v5H4Z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
    fill="none"
  />,
  // Relacionamentos
  <path
    key="relacionamentos"
    d="M9.5 14.5 6.8 11.8a3 3 0 1 1 4.24-4.24l.46.46.46-.46a3 3 0 1 1 4.24 4.24l-5.7 5.7-3-3Z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
    fill="none"
  />,
  // Autoestima
  <path
    key="autoestima"
    d="M12 17.3 6.9 20l1-5.7-4.1-4 5.7-.8L12 4l2.5 5.5 5.7.8-4.1 4 1 5.7Z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
    fill="none"
  />,
];

function Services() {
  return (
    <section id="atendimentos" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Atendimentos</span>
          <h2>Como posso te ajudar</h2>
          <p>Áreas de atuação pensadas para diferentes momentos e necessidades.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal as="div" className="service-card" key={service.title} delay={index * 90}>
              <div className="service-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  {icons[index]}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
