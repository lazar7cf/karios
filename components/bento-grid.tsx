"use client";

import { motion } from "framer-motion";
import IntelligentList from "./intelligent-list";
import CommandInput from "./command-input";
import LiveStatus from "./live-status";
import DataStream from "./data-stream";
import ContextualUI from "./contextual-ui";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 18 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            Platform
          </span>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 md:text-5xl leading-[1.15]">
            Everything you need to{" "}
            <span className="text-emerald-600">stay ahead</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500 max-w-[65ch]">
            Real-time monitoring, intelligent alerting, and collaborative
            investigation tools — fused into a single surface.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          <motion.div variants={cardVariants}>
            <Card label="Smart Queue" description="Tasks re-prioritize automatically based on real-time context.">
              <IntelligentList />
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card label="Natural Language Query" description="Ask your infrastructure questions in plain English.">
              <CommandInput />
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card label="Live Health Status" description="Breathing indicators with real-time notification push.">
              <LiveStatus />
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring" as const, stiffness: 100, damping: 20, delay: 0.3 }}
          className="mt-6 grid gap-6 md:grid-cols-5"
        >
          <div className="md:col-span-3">
            <Card label="Live Metrics Stream" description="Latency, throughput, and error rates flowing in perpetuity.">
              <DataStream />
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card label="Focus Mode" description="A clean editing surface with contextual tooling.">
              <ContextualUI />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-[2.5rem] border border-zinc-200/50 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_24px_48px_-15px_rgba(0,0,0,0.08)] h-full">
      <div className="mb-5">{children}</div>
      <div className="mt-auto">
        <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
          {label}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
