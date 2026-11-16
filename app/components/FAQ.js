"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "Come funziona la tecnologia NFC?",
    answer:
      "NFC (Near Field Communication) è una tecnologia di comunicazione a corto raggio integrata in tutti gli smartphone moderni. Quando il telefono viene avvicinato al tag NFC presente nel rendi-resto, il dispositivo legge automaticamente il collegamento programmato e lo apre nel browser. Non serve alcuna configurazione da parte del cliente.",
  },
  {
    question: "È compatibile con iPhone e Android?",
    answer:
      "Sì, la tecnologia NFC è compatibile con tutti gli iPhone dal modello 7 in poi e con la grande maggioranza dei dispositivi Android. Il funzionamento è immediato e non richiede alcuna configurazione aggiuntiva.",
  },
  {
    question: "Posso personalizzarlo con il mio logo?",
    answer:
      "Assolutamente sì. Ogni rendi-resto viene realizzato con una grafica personalizzata che include il logo e il nome della tua attività. La personalizzazione è inclusa nel prezzo.",
  },
  {
    question: "Posso scegliere il collegamento da aprire?",
    answer:
      "Sì, il collegamento NFC viene configurato in base alle tue esigenze. Può essere impostato per aprire la pagina recensioni della tua attività, il sito web, il menù digitale, la pagina social o qualsiasi altro indirizzo web tu preferisca.",
  },
  {
    question: "Devo installare un'applicazione?",
    answer:
      "No, non è necessaria alcuna applicazione. La tecnologia NFC funziona in modo nativo su tutti gli smartphone compatibili. Il cliente deve solo avvicinare il telefono al rendi-resto per aprire il collegamento.",
  },
  {
    question: "Come posso richiedere il mio prodotto?",
    answer:
      "Puoi richiedere il tuo rendi-resto NFC personalizzato compilando il modulo nella sezione contatti, scrivendoci via email o contattandoci direttamente su WhatsApp. Ti risponderemo nel più breve tempo possibile con tutte le informazioni necessarie.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black-brand"
    >
      {/* Top divider */}
      <div className="gold-divider w-full mb-24" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Domande Frequenti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            <span className="text-gradient-gold">FAQ</span>
          </h2>
          <p className="text-gray-light text-lg">
            Tutto quello che devi sapere sul rendi-resto NFC.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`animate-on-scroll stagger-${Math.min(index + 1, 5)}`}
            >
              <div
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "border-gold/40 bg-gray-card/80"
                    : "border-white/10 bg-gray-card/30 hover:border-gold/20"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-semibold text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="h-px bg-gold/10 mb-4" />
                    <p className="text-gray-light leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
