"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "@/lib/icons";

const faqs = [
  {
    q: "How long does it take to set up Karios?",
    a: "Most teams are up and running in under 20 minutes. Install our CLI, generate an API token, and point Karios at your endpoints. No onboarding calls or sales demos required.",
  },
  {
    q: "What infrastructure does Karios support?",
    a: "Karios works with any HTTP-based service, monitor, or API. We have native integrations with AWS, Vercel, Datadog, PagerDuty, GitHub, and 50+ other platforms. Our CLI also works with custom and self-hosted infrastructure.",
  },
  {
    q: "Can I try Karios before committing?",
    a: "Yes. Every plan comes with a 14-day free trial. No credit card is required. You get full access to all features — including unlimited monitors, natural language query, and the auto-sorting incident queue.",
  },
  {
    q: "How does pricing work for larger teams?",
    a: "Our Pro plan supports up to 25 team members and 50 monitors. For organizations that need more, the Enterprise plan offers unlimited members, monitors, data retention, SSO, RBAC, and a dedicated support engineer.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter and Pro plans include email and Slack-based support with a 4-hour response time during business hours. Enterprise customers get a dedicated support engineer with a 30-minute SLA and 24/7 coverage.",
  },
  {
    q: "Is my data secure with Karios?",
    a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We offer SSO, RBAC, audit logs, and SOC 2 Type II compliance. Enterprise customers can also request an on-premise deployment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            FAQ
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-5xl leading-[1.15]">
            Questions we{" "}
            <span className="text-emerald-600">hear often</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl text-left">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, type: "spring" as const, stiffness: 100, damping: 20 }}
                className={cn(
                  "border-b border-zinc-100 last:border-b-0",
                  i === 0 && "border-t"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-0 py-5 text-left transition-colors hover:text-emerald-600"
                >
                  <span className="text-base font-medium text-zinc-800">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
                    className="shrink-0 text-zinc-400"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-zinc-500 max-w-[60ch]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
