import { useState } from "react";
import { serviceOptions } from "../data/content";
import { buildBookingMessage, buildWhatsAppUrl } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const initialFormState = {
  nome: "",
  whatsapp: "",
  email: "",
  tipoAtendimento: "",
  data: "",
  horario: "",
  mensagem: "",
};

const stepLabels = ["Seus dados", "Atendimento", "Mensagem"];

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const len = digits.length;

  if (len === 0) return "";
  if (len <= 2) return `(${digits}`;
  if (len <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatDateDisplay(isoDate) {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}/${month}/${year}`;
}

function BookingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (field) => (event) => {
    const value = field === "whatsapp" ? formatPhone(event.target.value) : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (step) => {
    const stepErrors = {};

    if (step === 0) {
      if (!form.nome.trim()) {
        stepErrors.nome = "Por favor, informe seu nome.";
      }
      if (!form.whatsapp.trim()) {
        stepErrors.whatsapp = "Por favor, informe seu WhatsApp.";
      } else if (form.whatsapp.replace(/\D/g, "").length < 10) {
        stepErrors.whatsapp = "Informe um número de WhatsApp válido.";
      }
    }

    if (step === 1) {
      if (!form.tipoAtendimento) {
        stepErrors.tipoAtendimento = "Selecione uma opção de atendimento.";
      }
      if (!form.data) {
        stepErrors.data = "Escolha uma data.";
      }
      if (!form.horario) {
        stepErrors.horario = "Escolha um horário.";
      }
    }

    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, stepLabels.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (!validateStep(0) || !validateStep(1)) {
      return;
    }

    const message = buildBookingMessage(form);
    const url = buildWhatsAppUrl(message);

    setWhatsappUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNewRequest = () => {
    setForm(initialFormState);
    setErrors({});
    setSubmitted(false);
    setWhatsappUrl("");
    setCurrentStep(0);
  };

  return (
    <section id="agendamento" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Agendamento</span>
          <h2>Agende seu atendimento</h2>
          <p>
            Preencha seus dados abaixo. Ao finalizar, você poderá enviar as informações
            diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="booking-card">
          {submitted ? (
            <div className="booking-success">
              <div className="booking-success-icon">
                <WhatsAppIcon size={28} />
              </div>
              <h3>Solicitação preparada!</h3>
              <p>
                Suas informações foram organizadas para envio pelo WhatsApp. Agora é só
                continuar a conversa com Angélica.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={18} />
                Abrir WhatsApp
              </a>
              <div style={{ marginTop: "18px" }}>
                <button type="button" className="btn btn-outline" onClick={handleNewRequest}>
                  Preencher novamente
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="booking-stepper">
                {stepLabels.map((label, index) => (
                  <div
                    className={`booking-step ${index === currentStep ? "active" : ""} ${
                      index < currentStep ? "completed" : ""
                    }`}
                    key={label}
                  >
                    <div className="booking-step-circle">
                      {index < currentStep ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="booking-step-label">{label}</span>
                    {index < stepLabels.length - 1 && (
                      <span className="booking-step-line" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>

              <form noValidate>
                {currentStep === 0 && (
                  <div className="booking-step-panel">
                    <div className={`form-group ${errors.nome ? "has-error" : ""}`}>
                      <label htmlFor="nome">Nome completo</label>
                      <input
                        id="nome"
                        type="text"
                        value={form.nome}
                        onChange={handleChange("nome")}
                        placeholder="Seu nome completo"
                        autoFocus
                      />
                      {errors.nome && <span className="field-error">{errors.nome}</span>}
                    </div>

                    <div className="form-row">
                      <div className={`form-group ${errors.whatsapp ? "has-error" : ""}`}>
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input
                          id="whatsapp"
                          type="tel"
                          inputMode="tel"
                          value={form.whatsapp}
                          onChange={handleChange("whatsapp")}
                          placeholder="(11) 99999-9999"
                        />
                        {errors.whatsapp && (
                          <span className="field-error">{errors.whatsapp}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">
                          E-mail <span className="optional-tag">(opcional)</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange("email")}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="booking-step-panel">
                    <div className={`form-group ${errors.tipoAtendimento ? "has-error" : ""}`}>
                      <label htmlFor="tipoAtendimento">Tipo de atendimento</label>
                      <select
                        id="tipoAtendimento"
                        value={form.tipoAtendimento}
                        onChange={handleChange("tipoAtendimento")}
                      >
                        <option value="">Selecione uma opção</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.tipoAtendimento && (
                        <span className="field-error">{errors.tipoAtendimento}</span>
                      )}
                    </div>

                    <div className="form-row">
                      <div className={`form-group ${errors.data ? "has-error" : ""}`}>
                        <label htmlFor="data">Data preferida</label>
                        <input
                          id="data"
                          type="date"
                          value={form.data}
                          onChange={handleChange("data")}
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {errors.data && <span className="field-error">{errors.data}</span>}
                      </div>

                      <div className={`form-group ${errors.horario ? "has-error" : ""}`}>
                        <label htmlFor="horario">Horário preferido</label>
                        <input
                          id="horario"
                          type="time"
                          value={form.horario}
                          onChange={handleChange("horario")}
                        />
                        {errors.horario && (
                          <span className="field-error">{errors.horario}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="booking-step-panel">
                    <div className="booking-summary">
                      <div className="booking-summary-row">
                        <span>Nome</span>
                        <strong>{form.nome}</strong>
                      </div>
                      <div className="booking-summary-row">
                        <span>WhatsApp</span>
                        <strong>{form.whatsapp}</strong>
                      </div>
                      <div className="booking-summary-row">
                        <span>Atendimento</span>
                        <strong>{form.tipoAtendimento}</strong>
                      </div>
                      <div className="booking-summary-row">
                        <span>Data e horário</span>
                        <strong>
                          {formatDateDisplay(form.data)} às {form.horario}
                        </strong>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensagem">
                        Mensagem <span className="optional-tag">(opcional)</span>
                      </label>
                      <textarea
                        id="mensagem"
                        value={form.mensagem}
                        onChange={handleChange("mensagem")}
                        placeholder="Conte brevemente o que você gostaria de conversar ou alguma preferência sobre o atendimento."
                      />
                    </div>
                  </div>
                )}

                <div className="booking-nav">
                  <div>
                    {currentStep > 0 && (
                      <button type="button" className="btn btn-outline" onClick={handleBack}>
                        Voltar
                      </button>
                    )}
                  </div>
                  <div>
                    {currentStep < stepLabels.length - 1 ? (
                      <button type="button" className="btn btn-primary" onClick={handleNext}>
                        Próximo
                      </button>
                    ) : (
                      <button type="button" className="btn btn-whatsapp" onClick={handleSubmit}>
                        <WhatsAppIcon size={18} />
                        Enviar pelo WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
