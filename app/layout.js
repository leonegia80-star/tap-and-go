import "./globals.css";

export const metadata = {
  title: "Tap & Go NFC | Soluzioni digitali per il tuo business",
  description:
    "Soluzioni NFC personalizzate e automazione intelligente per aziende, attività commerciali e strutture ricettive. Tap. Connetti. Accedi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
