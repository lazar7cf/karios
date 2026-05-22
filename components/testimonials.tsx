"use client";

import { motion } from "framer-motion";
import { Star } from "@/lib/icons";

const testimonials = [
  {
    quote: "We caught a cascading failure 11 minutes before it hit production. Karios paid for itself in that single alert.",
    name: "Raya Okonkwo",
    role: "SRE Lead, Tendril Health",
    rating: 5,
    avatar: "https://picsum.photos/seed/rayaok/120/120",
  },
  {
    quote: "Setup took under 20 minutes. The auto-sorting queue alone saved my team about 6 hours of triage per week.",
    name: "Marcus Velez",
    role: "Engineering Manager, LayerTwo",
    rating: 5,
    avatar: "https://picsum.photos/seed/marcusv/120/120",
  },
  {
    quote: "I have tried a dozen monitoring tools. Karios is the first one that does not feel like a firehose of noise.",
    name: "Lin Hsu",
    role: "Principal Engineer, Rift Commerce",
    rating: 5,
    avatar: "https://picsum.photos/seed/linhsu/120/120",
  },
  {
    quote: "The natural language query feature is dangerous — in the best way. Our non-technical stakeholders actually use it.",
    name: "Priya Nair",
    role: "VP of Infrastructure, Atlas Pay",
    rating: 5,
    avatar: "https://picsum.photos/seed/priyanair/120/120",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-5xl leading-[1.15]">
            Trusted by teams that{" "}
            <span className="text-emerald-600">move fast</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 100, damping: 20 }}
              className="flex flex-col rounded-[2rem] border border-zinc-200/50 bg-white p-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, r) => (
                  <Star
                    key={r}
                    className="h-3.5 w-3.5 text-emerald-500"
                  />
                ))}
              </div>
              <blockquote className="mb-5 text-sm leading-relaxed text-zinc-600 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-800">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
