"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-[2rem] border border-zinc-200/50 bg-white/70 px-6 py-3 shadow-[0_8px_32px_-12px_rgba(24,24,27,0.08)] backdrop-blur-xl">
          <a href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
            Karios
          </a>

          <div className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Get Early Access
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
