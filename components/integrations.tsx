"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Slack", type: "Messaging" },
  { name: "PagerDuty", type: "Incident Response" },
  { name: "Datadog", type: "Monitoring" },
  { name: "GitHub", type: "Version Control" },
  { name: "Vercel", type: "Deployment" },
  { name: "AWS", type: "Cloud Infrastructure" },
  { name: "Linear", type: "Project Management" },
  { name: "Sentry", type: "Error Tracking" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            Integrations
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-5xl leading-[1.15]">
            Works with the tools{" "}
            <span className="text-emerald-600">you already use</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 max-w-[65ch]">
            Connect Karios to your existing stack in minutes. Native
            integrations with the platforms your team relies on every day.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, type: "spring" as const, stiffness: 100, damping: 20 }}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-200/50 bg-white px-5 py-4 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-700">
                {integration.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800">
                  {integration.name}
                </p>
                <p className="text-xs text-zinc-400">{integration.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
