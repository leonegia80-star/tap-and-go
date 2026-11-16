"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Personalization() {
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

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      label: "Logo della tua attività",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      label: "Nome della tua attività",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75zM15.75 9a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      label: "Grafica personalizzata",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
      label: "Collegamento NFC su misura",
    },
  ];

  return (
    <section
      id="personalizzazione"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black-brand via-gray-dark to-black-brand"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="border-glow-gold rounded-2xl overflow-hidden">
                  <Image
                    src="/images/prodotto-rendiresto-1.jpg"
                    alt="Rendi-Resto NFC personalizzato - vista laterale"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="border-glow-gold rounded-2xl overflow-hidden">
                  <Image
                    src="/images/prodotto-rendiresto-2.jpg"
                    alt="Rendi-Resto NFC personalizzato - vista frontale"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="animate-on-scroll stagger-2">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Personalizzazione
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              IL TUO BRAND,
              <br />
              <span className="text-gradient-gold">IL TUO RENDI-RESTO.</span>
            </h2>
            <p className="text-gray-light text-lg leading-relaxed mb-10">
              Ogni attività ha la propria identità. Realizziamo una grafica
              personalizzata con il tuo logo e il nome della tua attività, per
              integrare il prodotto perfettamente nel tuo ambiente di lavoro.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-card/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-white font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Included badge */}
            <div className="mt-8 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2.5">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gold font-semibold text-sm tracking-wide">
                Personalizzazione inclusa nel prezzo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
