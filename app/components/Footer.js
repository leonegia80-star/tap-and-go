'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black-brand border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-tapandgo.jpg"
              alt="Tap & Go NFC Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <span className="text-white font-bold text-base tracking-wide">
                Tap<span className="text-gold">&amp;</span>Go
              </span>
              <span className="block text-[10px] text-gray-light tracking-[0.2em] uppercase -mt-0.5">
                NFC
              </span>
            </div>
          </div>

          {/* Payoff */}
          <p className="text-gray-light text-sm tracking-widest uppercase">
            Connetti. Condividi. Cresci.
          </p>

          {/* Copyright */}
          <p className="text-gray-light/60 text-xs">
            &copy; {currentYear} Tap &amp; Go NFC. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
