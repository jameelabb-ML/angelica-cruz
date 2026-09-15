import { therapist } from "../data/content";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <Reveal as="div" className="about-photo">
          <img src={therapist.image} alt={therapist.name} />
        </Reveal>

        <Reveal as="div" className="about-content" delay={120}>
          <span className="eyebrow">Sobre mim</span>
          <h2>Sobre mim</h2>
          <p>
            Sou Angélica Cruz, psicoterapeuta. Acredito que a terapia é, antes de tudo, um
            espaço de acolhimento e escuta, onde cada pessoa pode se expressar livremente e
            ser recebida sem julgamentos.
          </p>
          <p>
            No meu trabalho, dou atenção especial às emoções e à forma como elas se
            manifestam nos relacionamentos, sejam eles amorosos, familiares ou consigo
            mesmo. Cada história é única, e busco caminhar ao lado de cada pessoa em seu
            processo de desenvolvimento pessoal.
          </p>
          <p>
            Se você busca um espaço de escuta genuína para cuidar das suas emoções e dos
            seus relacionamentos, será um prazer te acompanhar nessa jornada.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
