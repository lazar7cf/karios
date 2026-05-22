"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, Cube, ChartLine } from "@/lib/icons";

const stats = [
  {
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability across all plans",
    icon: Activity,
  },
  {
    value: "2,400+",
    label: "Teams onboarded",
    description: "From startups to Fortune 500 engineering orgs",
    icon: ArrowRight,
  },
  {
    value: "10M+",
    label: "Events daily",
    description: "Processed and analyzed in real time every day",
    icon: ChartLine,
  },
  {
    value: "4.9/5",
    label: "Average rating",
    description: "Across 500+ verified G2 reviews",
    icon: Cube,
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            By the numbers
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-5xl leading-[1.15]">
            Built for scale,{" "}
            <span className="text-emerald-600">proven by data</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 100, damping: 20 }}
                className="rounded-[2rem] border border-zinc-200/50 bg-white p-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <p className="text-3xl font-semibold tracking-tighter text-zinc-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-700">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
