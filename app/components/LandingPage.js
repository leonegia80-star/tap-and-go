"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const emailAddress = "leonegia80@gmail.com";
const whatsappNumber = "393773741833";

const solutions = [
  {
    id: "rendi-resto",
    category: "Recensioni e fidelizzazione",
    title: "Rendi-resto NFC",
    headline: "Il tuo resto diventa un'opportunità.",
    description:
      "Un semplice tap accompagna il cliente alla pagina di recensione della tua attività, con un supporto personalizzato con il tuo logo.",
    image: "/images/rendi-resto.png",
    alt: "Supporto Rendi-resto NFC per le recensioni",
    features: [
      "Supporto e grafica personalizzabili",
      "Collegamento NFC configurato",
      "Per bar, ristoranti, negozi e attività",
    ],
  },
  {
    id: "tag-personalizzati",
    category: "Tag, card e supporti",
    title: "Tag NFC personalizzati",
    headline: "Il tuo brand, con un semplice tap.",
    description:
      "Tag adesivi, dischetti, card e portachiavi personalizzati per condividere in modo immediato i tuoi contenuti digitali.",
    image: "/images/tag-aziendali.jpg",
    alt: "Card NFC aziendali personalizzate con QR Code",
    features: [
      "Card, adesivi, dischetti e portachiavi",
      "Link a sito, Wi-Fi, social e cataloghi",
      "Anche con QR Code",
    ],
  },
  {
    id: "cartolerie",
    category: "Cartolerie e copisterie",
    title: "Invia qui i tuoi file",
    headline: "Invia i tuoi file con un semplice tap.",
    description:
      "Un supporto pratico che collega il cliente a WhatsApp o all'email della copisteria per inviare documenti, fotografie e PDF.",
    image: "/images/cartolerie-copisterie.png",
    alt: "Supporto NFC Tap & Go per inviare file in cartoleria",
    features: [
      "Collegamento diretto a WhatsApp o email",
      "Personalizzazione con il logo aziendale",
      "Meno passaggi per inviare i documenti",
    ],
  },
  {
    id: "ristoranti",
    category: "Ristoranti e locali",
    title: "Menu digitale",
    headline: "Il menu del tuo locale, a portata di tap.",
    description:
      "I clienti accedono al menu digitale avvicinando lo smartphone al supporto NFC o inquadrando il QR Code.",
    image: "/images/menu-ristoranti.png",
    alt: "Supporto NFC per consultare il menu di un ristorante",
    features: [
      "NFC e QR Code",
      "Grafica e logo personalizzati",
      "Per ristoranti, pizzerie, bar e locali",
    ],
  },
  {
    id: "social",
    category: "Social media",
    title: "Social media NFC",
    headline: "I tuoi social, sempre a portata di mano.",
    description:
      "Supporti NFC personalizzati per portare i clienti direttamente ai profili social della tua azienda.",
    image: "/images/social-media.png",
    alt: "Supporto NFC personalizzato per condividere il profilo Instagram",
    features: [
      "Instagram, Facebook e altri profili",
      "Nome, logo e grafica aziendale",
      "Possibilità di integrare QR Code",
    ],
  },
];

const gallery = [
  {
    src: "/images/rendi-resto.jpg",
    alt: "Supporto per recensioni Google personalizzato",
    title: "Rendi-resto",
  },
  {
    src: "/images/tag-personalizzati.avif",
    alt: "Esempi di tag NFC rotondi e quadrati personalizzati",
    title: "Tag e QR Code",
  },
  {
    src: "/images/tag-aziendali.jpg",
    alt: "Card NFC per menu, audioguida e informazioni",
    title: "Card aziendali",
  },
  {
    src: "/images/social-media-2.avif",
    alt: "Collezione di tag NFC personalizzati per recensioni e social",
    title: "Soluzioni personalizzate",
  },
  {
    src: "/images/social-media.png",
    alt: "Supporto NFC per il profilo Instagram",
    title: "Social media",
  },
  {
    src: "/images/cartolerie-copisterie.png",
    alt: "Supporto NFC per l'invio di file in copisteria",
    title: "Cartolerie e copisterie",
  },
];

const audiences = [
  "Ristoranti e pizzerie",
  "Bar e caffetterie",
  "Cartolerie e copisterie",
  "Negozi e attività commerciali",
  "B&B e case vacanza",
  "Hotel e strutture ricettive",
  "Aziende e professionisti",
];

const automationSteps = [
  "Il sensore rileva la presenza nell'ambiente, senza telecamere.",
  "Il sistema elabora le informazioni secondo la configurazione scelta.",
  "Se l'ambiente risulta non occupato, possono attivarsi le automazioni concordate.",
  "Luci, climatizzazione e dispositivi compatibili vengono gestiti secondo il progetto.",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [requestedSolution, setRequestedSolution] = useState("");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  function requestInformation(solution) {
    setRequestedSolution(solution);
    setMenuOpen(false);
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Nome e cognome: ${formData.get("name")}`,
      `Azienda o attività: ${formData.get("business") || "Non specificata"}`,
      `Email: ${formData.get("email")}`,
      `Telefono: ${formData.get("phone") || "Non specificato"}`,
      `Soluzione richiesta: ${formData.get("solution")}`,
      "",
      "Messaggio:",
      formData.get("message"),
    ].join("\n");
    const subject = `Richiesta informazioni - ${formData.get("solution")}`;

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormMessage("Si sta aprendo il tuo programma email con la richiesta compilata.");
  }

  const navigation = [
    ["Soluzioni NFC", "#soluzioni"],
    ["Settori", "#settori"],
    ["Automazione", "#automazione"],
    ["Come funziona", "#come-funziona"],
  ];

  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <a className="brand" href="#inizio" aria-label="Tap & Go NFC, torna all'inizio">
            <Image
              src="/images/logo-tapandgo.jpg"
              alt=""
              width={52}
              height={52}
              priority
              className="brand-mark"
            />
            <span className="brand-copy">
              <strong>Tap <span>&amp;</span> Go</strong>
              <small>TAP. CONNETTI. ACCEDI.</small>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            aria-label="Navigazione principale"
          >
            <a href="#inizio" onClick={() => setMenuOpen(false)}>Home</a>
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="button button-small nav-cta" href="#contatti" onClick={() => setMenuOpen(false)}>
              Richiedi informazioni
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inizio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Tecnologia semplice, relazioni più vicine</p>
              <h1>La tecnologia che avvicina le persone <span>al tuo business.</span></h1>
              <p className="hero-intro">
                Soluzioni NFC personalizzate, strumenti digitali e automazione intelligente per rendere la tua attività più connessa, semplice ed efficiente.
              </p>
              <div className="button-row">
                <a className="button" href="#soluzioni">Scopri le soluzioni <ArrowIcon /></a>
                <a className="button button-secondary" href="#contatti">Contattaci</a>
              </div>
              <div className="hero-proof">
                <span className="proof-icon">NFC</span>
                <p><strong>Un gesto, nuove possibilità.</strong><br />Soluzioni configurate intorno alla tua attività.</p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/tag-aziendali.jpg"
                  alt="Card NFC Tap & Go personalizzate per attività e aziende"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 48vw"
                  className="hero-image"
                />
              </div>
              <div className="hero-note">
                <span className="hero-note-icon">01</span>
                <span><strong>Avvicina</strong><small>Lo smartphone al supporto</small></span>
                <ArrowIcon />
              </div>
              <span className="hero-orbit hero-orbit-one" />
              <span className="hero-orbit hero-orbit-two" />
            </div>
          </div>
          <div className="container hero-highlights" aria-label="Vantaggi delle soluzioni">
            <span>Configurazione personalizzata</span>
            <span>NFC e QR Code</span>
            <span>Per attività e strutture ricettive</span>
          </div>
        </section>

        <section className="section solutions-section" id="soluzioni">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Soluzioni NFC</p>
              <h2>Un tap apre nuove <span>possibilità.</span></h2>
              <p>Supporti digitali personalizzati per semplificare il contatto tra la tua attività e i tuoi clienti.</p>
            </div>
            <div className="solutions-grid">
              {solutions.map((solution, index) => (
                <article className={`solution-card${index === 0 ? " solution-featured" : ""}`} key={solution.id}>
                  <a
                    className="solution-image"
                    href={solution.image}
                    onClick={(event) => {
                      event.preventDefault();
                      setSelectedImage({ src: solution.image, alt: solution.alt });
                    }}
                    aria-label={`Ingrandisci: ${solution.alt}`}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.alt}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      className="product-image"
                    />
                    <span className="image-zoom" aria-hidden="true">+</span>
                  </a>
                  <div className="solution-content">
                    <p className="card-kicker">{solution.category}</p>
                    <h3>{solution.title}</h3>
                    <h4>{solution.headline}</h4>
                    <p className="solution-description">{solution.description}</p>
                    <ul className="feature-list">
                      {solution.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <button className="text-link" type="button" onClick={() => requestInformation(solution.title)}>
                      Richiedi informazioni <ArrowIcon />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section automation-section" id="automazione">
          <div className="container automation-grid">
            <div className="automation-copy">
              <p className="eyebrow">Automazione intelligente</p>
              <h2>La casa intelligente che riduce <span>gli sprechi.</span></h2>
              <p className="automation-lead">Automazione, controllo remoto e gestione dei consumi per abitazioni e strutture ricettive.</p>
              <p>
                Progettiamo soluzioni su misura con sensori di presenza non video per gestire le automazioni dell’ambiente. Funzioni, dispositivi e compatibilità vengono definiti in base alle caratteristiche dello spazio.
              </p>
              <div className="automation-tags">
                <span>B&amp;B</span><span>Case vacanza</span><span>Hotel</span><span>Abitazioni</span>
              </div>
              <a className="button" href="#contatti">Richiedi una consulenza <ArrowIcon /></a>
              <p className="compatibility-note">Ogni progetto viene valutato in base ai dispositivi presenti e alle esigenze della struttura.</p>
            </div>
            <div className="automation-panel">
              <div className="panel-topline"><span className="status-dot" /> Un sistema progettato per il tuo spazio</div>
              <h3>Dal rilevamento all’azione</h3>
              <ol className="automation-steps">
                {automationSteps.map((step, index) => (
                  <li key={step}>
                    <span className="step-number">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="panel-footer">
                <span className="panel-symbol">⌁</span>
                <p><strong>Senza telecamere</strong><br />Rilevamento tramite sensori non video.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section audience-section" id="settori">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A chi ci rivolgiamo</p>
              <h2>Soluzioni per chi vuole <span>connettersi meglio.</span></h2>
              <p>Ogni realtà ha esigenze diverse: individuiamo insieme il supporto più adatto.</p>
            </div>
            <div className="audience-grid">
              {audiences.map((audience, index) => (
                <div className="audience-card" key={audience}>
                  <span className="audience-number">0{index + 1}</span>
                  <span>{audience}</span>
                  <ArrowIcon />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="come-funziona">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Come funziona</p>
              <h2>Dall’idea all’attivazione, <span>insieme.</span></h2>
            </div>
            <div className="process-grid">
              {[
                ["01", "Scegli la soluzione", "Individuiamo insieme il prodotto o il servizio più adatto alla tua attività."],
                ["02", "Personalizza", "Adattiamo grafica, logo e collegamenti digitali alle tue esigenze."],
                ["03", "Attiva e utilizza", "Configuriamo la soluzione e ti aiutiamo a renderla operativa."],
              ].map(([number, title, description]) => (
                <article className="process-card" key={number}>
                  <span className="process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {number !== "03" && <span className="process-line" aria-hidden="true" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section personalization-section" id="personalizzazione">
          <div className="container personalization-grid">
            <div className="personalization-images">
              <button type="button" className="personalization-photo photo-main" onClick={() => setSelectedImage({ src: "/images/rendi-resto.jpg", alt: "Supporto Rendi-resto personalizzato" })} aria-label="Ingrandisci il Rendi-resto">
                <Image src="/images/rendi-resto.jpg" alt="Supporto NFC Rendi-resto personalizzato" fill sizes="(max-width: 760px) 90vw, 42vw" />
              </button>
              <button type="button" className="personalization-photo photo-secondary" onClick={() => setSelectedImage({ src: "/images/tag-personalizzati.avif", alt: "Tag NFC con diverse personalizzazioni" })} aria-label="Ingrandisci i tag NFC personalizzati">
                <Image src="/images/tag-personalizzati.avif" alt="Tag NFC in vari formati e colori" fill sizes="(max-width: 760px) 45vw, 22vw" />
              </button>
              <span className="photo-caption">Progettato intorno alla tua identità</span>
            </div>
            <div className="personalization-copy">
              <p className="eyebrow">Personalizzazione</p>
              <h2>Ogni azienda ha la sua identità. <span>Anche i suoi tag.</span></h2>
              <p>Non vendiamo soltanto supporti NFC: realizziamo soluzioni personalizzate con logo, colori, collegamenti e grafica coerenti con la tua attività.</p>
              <ul className="personalization-list">
                <li><span>✓</span> Logo e colori aziendali</li>
                <li><span>✓</span> Collegamenti digitali configurati</li>
                <li><span>✓</span> Formati e supporti diversi</li>
                <li><span>✓</span> Possibilità di integrare QR Code</li>
              </ul>
              <a className="text-link" href="#contatti">Parliamo del tuo progetto <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="gallery-heading">
              <div className="section-heading">
                <p className="eyebrow">Dai un’occhiata</p>
                <h2>Idee che prendono <span>forma.</span></h2>
              </div>
              <p>Alcune delle soluzioni e dei supporti personalizzati.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((image) => (
                <button
                  type="button"
                  className="gallery-item"
                  key={image.src}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Visualizza immagine: ${image.alt}`}
                >
                  <span className="gallery-photo">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 620px) 50vw, (max-width: 900px) 33vw, 25vw" />
                  </span>
                  <span className="gallery-title">{image.title}<span aria-hidden="true">↗</span></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contatti">
          <div className="container">
            <div className="contact-heading">
              <p className="eyebrow">Contatti e preventivi</p>
              <h2>Hai un’idea? <span>Diamole forma.</span></h2>
              <p>Raccontaci cosa ti serve. Troveremo insieme la soluzione tecnologica più adatta alla tua attività.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-details">
                <p className="contact-prompt">Preferisci parlare direttamente con noi?</p>
                <a className="contact-card whatsapp-card" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Ciao! Vorrei ricevere informazioni sulle soluzioni Tap & Go NFC.")}`} target="_blank" rel="noreferrer">
                  <span className="contact-icon">W</span>
                  <span><strong>Scrivici su WhatsApp</strong><small>Apri una conversazione</small></span>
                  <ArrowIcon />
                </a>
                <a className="contact-card" href={`mailto:${emailAddress}`}>
                  <span className="contact-icon email-icon">@</span>
                  <span><strong>Scrivici via email</strong><small>{emailAddress}</small></span>
                  <ArrowIcon />
                </a>
                <p className="contact-disclaimer">La richiesta di informazioni non comporta alcun obbligo di acquisto.</p>
              </div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <label>Nome e cognome<input name="name" autoComplete="name" required /></label>
                  <label>Azienda o attività<input name="business" autoComplete="organization" /></label>
                </div>
                <div className="form-row">
                  <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                  <label>Telefono<input name="phone" type="tel" autoComplete="tel" /></label>
                </div>
                <label>Tipologia di soluzione richiesta
                  <select name="solution" value={requestedSolution} onChange={(event) => setRequestedSolution(event.target.value)} required>
                    <option value="" disabled>Seleziona una soluzione</option>
                    {solutions.map((solution) => <option key={solution.id} value={solution.title}>{solution.title}</option>)}
                    <option value="Automazione intelligente">Automazione intelligente</option>
                    <option value="Altro">Altro</option>
                  </select>
                </label>
                <label>Messaggio<textarea name="message" rows="4" required placeholder="Raccontaci brevemente di cosa hai bisogno..." /></label>
                <button type="submit" className="button form-submit">Prepara la richiesta <ArrowIcon /></button>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
                <p className="form-note">Si aprirà il tuo programma email per completare l’invio.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#inizio" aria-label="Tap & Go NFC, torna all'inizio">
            <Image src="/images/logo-tapandgo.jpg" alt="" width={48} height={48} className="brand-mark" />
            <span className="brand-copy"><strong>Tap <span>&amp;</span> Go</strong><small>TAP. CONNETTI. ACCEDI.</small></span>
          </a>
          <p>Soluzioni NFC e strumenti digitali per connettere persone, attività e spazi.</p>
          <nav className="footer-links" aria-label="Link utili">
            <a href="#soluzioni">Soluzioni NFC</a>
            <a href="#automazione">Automazione</a>
            <a href="#come-funziona">Come funziona</a>
            <a href="#contatti">Contatti</a>
          </nav>
          <a className="footer-email" href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Tap &amp; Go NFC</span>
          <span>Tap. Connetti. Accedi.</span>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Immagine ingrandita"
          onClick={() => setSelectedImage(null)}
        >
          <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Chiudi immagine">×</button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="90vw" />
          </div>
          <p>{selectedImage.alt}</p>
        </div>
      )}
    </>
  );
}
