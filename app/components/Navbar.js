export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black-brand/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold via-[#f2c77a] to-[#b77d2f] text-base font-black text-black shadow-[0_10px_30px_rgba(216,162,77,0.4)]">
            T
          </div>
          <div className="text-white">
            <div className="text-base font-black tracking-[-0.04em]">
              Tap<span className="text-gold">&amp;</span>Go
            </div>
            <div className="-mt-0.5 text-[10px] uppercase tracking-[0.25em] text-gray-light">
              NFC
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-gray-light md:flex">
          <a href="#how-it-works" className="transition hover:text-white">Come funziona</a>
          <a href="#personalization" className="transition hover:text-white">Personalizzazione</a>
          <a href="#pricing" className="transition hover:text-white">Prezzi</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </div>

        <a
          href="#contact"
          className="luxury-button px-5 py-2.5 text-sm"
        >
          Contattaci
        </a>
      </nav>
    </header>
  );
}
