"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "@/lib/icons";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "For small teams getting started with monitoring.",
    features: [
      "Up to 5 team members",
      "10 monitors included",
      "5-minute check intervals",
      "Slack & email alerts",
      "7-day data retention",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "89",
    description: "For growing teams that need deeper visibility.",
    features: [
      "Up to 25 team members",
      "50 monitors included",
      "1-minute check intervals",
      "PagerDuty, Slack, email, webhooks",
      "90-day data retention",
      "Auto-sorting incident queue",
      "Natural language query",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "249",
    description: "For organizations with custom infrastructure needs.",
    features: [
      "Unlimited team members",
      "Unlimited monitors",
      "10-second check intervals",
      "All integrations + custom webhooks",
      "Unlimited data retention",
      "SSO & RBAC",
      "Dedicated support engineer",
      "On-premise deployment option",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            Pricing
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-5xl leading-[1.15]">
            Straightforward plans{" "}
            <span className="text-emerald-600">for every scale</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 100, damping: 20 }}
              className={cn(
                "relative flex flex-col rounded-[2.5rem] border p-8 shadow-[0_8px_24px_-12px_rgba(24,24,27,0.04)]",
                plan.popular
                  ? "border-emerald-300/60 bg-emerald-50/40 shadow-[0_8px_32px_-12px_rgba(16,185,129,0.12)]"
                  : "border-zinc-200/50 bg-white"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-emerald-600 px-5 py-1.5 text-xs font-semibold text-white shadow-[0_4px_12px_-4px_rgba(16,185,129,0.3)]">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-zinc-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tighter text-zinc-900">
                  ${plan.price}
                </span>
                <span className="text-sm text-zinc-400">/month</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                  plan.popular
                    ? "bg-zinc-900 text-white hover:bg-zinc-800"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                )}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
