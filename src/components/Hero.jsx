import { therapist, specialties } from "../data/content";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <span className="hero-eyebrow">Psicoterapia individual, de casal e familiar</span>
        <h1>{therapist.name}</h1>
        <p className="hero-title">{therapist.title}</p>
        <p className="hero-specialties">{specialties.join(" • ")}</p>
        <p className="hero-lead">
          Um espaço seguro e acolhedor para você refletir, cuidar das suas emoções e
          construir relacionamentos mais saudáveis, no seu tempo e do seu jeito.
        </p>
        <div className="hero-actions">
          <a href="#agendamento" className="btn btn-primary">
            Agendar atendimento
          </a>
          <a href="#sobre" className="btn btn-outline">
            Conheça meu trabalho
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
