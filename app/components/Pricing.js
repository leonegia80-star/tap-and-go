"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
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

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const included = [
    "Rendi-resto in materiale trasparente",
    "Tag NFC integrato e programmato",
    "Grafica personalizzata con il tuo logo",
    "Nome della tua attività stampato",
    "Collegamento NFC configurato",
    "Pronto per essere utilizzato",
  ];

  return (
    <section
      id="prezzo"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black-brand via-gray-dark to-black-brand"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Prezzo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            PORTA LA TECNOLOGIA NFC
            <br />
            <span className="text-gradient-gold">NELLA TUA ATTIVITÀ.</span>
          </h2>
        </div>

        {/* Pricing card */}
        <div className="animate-on-scroll stagger-1">
          <div className="relative max-w-lg mx-auto">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 rounded-3xl blur-xl" />

            <div className="relative bg-gradient-to-b from-gray-card to-black-brand rounded-3xl border border-gold/30 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 px-8 py-6 text-center border-b border-gold/20">
                <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-1">
                  Rendi-Resto NFC
                </p>
                <p className="text-gray-light text-sm">
                  Personalizzato e pronto all&apos;uso
                </p>
              </div>

              {/* Price */}
              <div className="px-8 py-10 text-center">
                <div className="mb-8">
                  <span className="text-6xl sm:text-7xl font-extrabold text-white">
                    49
                  </span>
                  <span className="text-3xl font-bold text-gold ml-2">€</span>
                </div>

                <p className="text-gray-light text-base mb-8 max-w-sm mx-auto">
                  Rendi-resto NFC personalizzato, pronto per essere utilizzato
                  nella tua attività.
                </p>

                {/* Included features */}
                <div className="text-left space-y-3 mb-10">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-gold flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo("#contatti")}
                  className="w-full bg-gold hover:bg-gold-light text-black-brand font-bold py-4 px-8 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
                >
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
