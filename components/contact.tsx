"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "@/lib/icons";

const placeholders = [
  "your@company.com",
  "Try Karios free for 14 days",
  "No credit card required",
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = placeholders[placeholderIndex];

    if (!isDeleting && charIndex < current.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 50);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && charIndex >= current.length) {
      const timer = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timer);
    }

    if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => setCharIndex((c) => c - 1), 25);
      return () => clearTimeout(timer);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPlaceholderIndex((i) => (i + 1) % placeholders.length);
    }
  }, [charIndex, isDeleting, placeholderIndex]);

  const currentPlaceholder = placeholders[placeholderIndex].slice(0, charIndex);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-zinc-200/50 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] md:p-12">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-emerald-50/60 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-zinc-50 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          >
            <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
              Early Access
            </span>
            <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-4xl leading-[1.15]">
              Start monitoring in{" "}
              <span className="text-emerald-600">under 5 minutes</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500 max-w-[65ch]">
              Join 2,400+ engineering teams already using Karios. No onboarding
              calls, no sales demos — just a terminal and a token.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring" as const, stiffness: 80, damping: 18 }}
            className="mt-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={currentPlaceholder || "your@company.com"}
                  className="w-full rounded-full border border-zinc-200 bg-zinc-50/50 px-5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-300 focus:bg-white"
                  disabled={status === "submitting" || status === "success"}
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "submitting" || status === "success"}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 w-full sm:w-auto justify-center"
              >
                {status === "idle" && (
                  <>
                    Get early access
                    <ArrowRight size={16} />
                  </>
                )}
                {status === "submitting" && (
                  <>
                    Sending
                    <span className="flex gap-0.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="inline-block h-1 w-1 rounded-full bg-white"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </span>
                  </>
                )}
                {status === "success" && (
                  <>
                    You are on the list
                    <Check size={16} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xs text-zinc-400"
          >
            Free for 14 days · No credit card required · Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
}
