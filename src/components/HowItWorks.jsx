import { steps } from "../data/content";
import Reveal from "./Reveal";

function HowItWorks() {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Como funciona</span>
          <h2>Simples, rápido e claro</h2>
          <p>Entenda como funciona o processo de solicitação de atendimento.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <Reveal as="div" className="step-card" key={step.number} delay={index * 120}>
              <div className="step-number-wrap">
                <div className="step-number">{step.number}</div>
                {index < steps.length - 1 && <span className="step-connector" aria-hidden="true" />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
