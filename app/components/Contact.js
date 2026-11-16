"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "[EMAIL_ADDRESS]",
    message: "Sono interessato al rendi-resto NFC per la mia attività. Vorrei ricevere maggiori informazioni.",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrare con un servizio email o API
    console.log("Form data:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Configurazione — Modifica questi valori con i tuoi dati reali
  const WHATSAPP_NUMBER = "393773741833"; // Inserisci il tuo numero WhatsApp
  const EMAIL_ADDRESS = "leonegia80@gmail.com"; // Inserisci la tua email

  return (
    <section
      id="contatti"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black-brand via-gray-dark to-black-brand"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Contatti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            RICHIEDI{" "}
            <span className="text-gradient-gold">INFORMAZIONI</span>
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Sei interessato al rendi-resto NFC per la tua attività? Contattaci
            per ricevere tutte le informazioni di cui hai bisogno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="animate-on-scroll">
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ciao! Sono interessato al rendi-resto NFC per la mia attività.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl bg-gray-card/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors duration-300">
                  <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-base">
                    Scrivici su WhatsApp
                  </p>
                  <p className="text-gray-light text-sm">
                    Risposta rapida in tempo reale
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-light ml-auto group-hover:text-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-5 p-6 rounded-2xl bg-gray-card/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-base">
                    Scrivici via Email
                  </p>
                  <p className="text-gray-light text-sm">{EMAIL_ADDRESS}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-light ml-auto group-hover:text-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Info box */}
              <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                <p className="text-gold font-semibold text-sm mb-2">
                  💡 Nessun impegno vincolante
                </p>
                <p className="text-gray-light text-sm leading-relaxed">
                  La richiesta di informazioni non comporta alcun obbligo di
                  acquisto. Ti risponderemo con tutti i dettagli di cui hai
                  bisogno per valutare il prodotto.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-on-scroll stagger-2">
            <form
              onSubmit={handleSubmit}
              className="border-glow-gold rounded-2xl p-8 bg-gradient-to-b from-gray-card to-black-brand"
            >
              <h3 className="text-white font-bold text-xl mb-6">
                Richiedi informazioni
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-gray-light text-sm font-medium mb-2"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-brand/50 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-gray-light/50 outline-none transition-colors duration-300 text-sm"
                    placeholder="Il tuo nome"
                  />
                </div>

                {/* Business */}
                <div>
                  <label
                    htmlFor="contact-business"
                    className="block text-gray-light text-sm font-medium mb-2"
                  >
                    Nome dell&apos;attività
                  </label>
                  <input
                    type="text"
                    id="contact-business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-brand/50 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-gray-light/50 outline-none transition-colors duration-300 text-sm"
                    placeholder="Es. Bar Roma, Pizzeria da Mario..."
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-gray-light text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black-brand/50 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-gray-light/50 outline-none transition-colors duration-300 text-sm"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-gray-light text-sm font-medium mb-2"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black-brand/50 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-gray-light/50 outline-none transition-colors duration-300 text-sm resize-none"
                    placeholder="Raccontaci di cosa hai bisogno..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-black-brand font-bold py-4 px-8 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
                >
                  {isSubmitted ? "✓ Richiesta Inviata!" : "Invia Richiesta"}
                </button>
              </div>

              {isSubmitted && (
                <p className="mt-4 text-center text-green-400 text-sm">
                  Grazie per la tua richiesta! Ti risponderemo al più presto.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
