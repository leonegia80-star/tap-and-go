const steps = [
  {
    title: "1. Personalizzi il supporto",
    text: "Definiamo il look, i colori e il contenuto del tuo rendi-resto NFC personalizzato.",
  },
  {
    title: "2. Configuri il link",
    text: "Scegli dove aprire il cliente: sito web, menu, recensioni, social o pagina dedicata.",
  },
  {
    title: "3. Attivi e condividi",
    text: "Lo posizioni nel tuo locale e i tuoi clienti lo usano con un semplice tocco del telefono.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black-brand py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Come funziona
          </span>
          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
            Un’esperienza semplice in tre passi.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-black">
                {step.title.split(".")[0].split(" ")[0]}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-gray-light">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
