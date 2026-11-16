export default function HeroSection() {
  return (
    <section className="premium-shell relative overflow-hidden bg-black-brand">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold shadow-[0_0_20px_rgba(216,162,77,0.2)]">
            Tap &amp; Go NFC
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Trasforma il tuo <span className="text-gradient-gold">rendi-resto</span> in un punto di contatto digitale.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-light">
            Semplice, elegante e immediato: collega il tuo cliente al sito, al menu, alle recensioni o al social con un solo tocco.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="luxury-button px-6 py-3 text-sm"
            >
              Richiedi il tuo prodotto
            </a>
            <a
              href="#how-it-works"
              className="luxury-ghost rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:border-gold/40 hover:text-gold"
            >
              Scopri come funziona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="premium-card rounded-[28px] p-6 shadow-2xl shadow-gold/10">
            <div className="rounded-[24px] border border-gold/20 bg-[#0c0d0f] p-6">
              <div className="mb-6 flex items-center justify-between text-sm text-gray-light">
                <span className="font-medium">Rendi-resto NFC</span>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Online
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Azioni</p>
                  <p className="mt-2 text-xl font-semibold text-white">Apri sito web</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Branding</p>
                  <p className="mt-2 text-xl font-semibold text-white">Logo e colori personalizzati</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Supporto</p>
                  <p className="mt-2 text-xl font-semibold text-white">Configurazione semplice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
