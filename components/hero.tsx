"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/lib/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

function FloatingMetric({
  label,
  value,
  delay,
  className,
}: {
  label: string;
  value: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring" as const, stiffness: 80, damping: 18 }}
      className={cn("absolute rounded-2xl border border-zinc-200/50 bg-white/80 px-4 py-3 shadow-[0_8px_24px_-8px_rgba(24,24,27,0.06)] backdrop-blur-md", className)}
    >
      <p className="text-xs font-medium text-zinc-500">{label}</p>
      <p className="text-lg font-semibold tracking-tight text-zinc-900">{value}</p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="w-full mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2"
        >
          <div className="max-w-xl">
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-50/50 px-4 py-1.5 text-xs font-medium text-emerald-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live in production
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold tracking-tighter text-zinc-900 leading-[1.1]"
            >
              Intelligence that
              <span className="block text-emerald-600">keeps flowing</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-relaxed text-zinc-500 max-w-[65ch]"
            >
              Karios monitors your workflows in real time, surfaces anomalies
              before they compound, and gives your team the context to act - not
              just the numbers.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 w-full sm:w-auto justify-center"
              >
                Start monitoring
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 w-full sm:w-auto justify-center"
              >
                See how it works
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[
                  "https://picsum.photos/seed/portrait1/80/80",
                  "https://picsum.photos/seed/portrait2/80/80",
                  "https://picsum.photos/seed/portrait3/80/80",
                  "https://picsum.photos/seed/portrait4/80/80",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500">
                <span className="font-semibold text-zinc-800">2,400+</span> teams
                already onboard
              </p>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[520px] w-full max-w-[560px]">
              <div className="absolute inset-0 rounded-[2.5rem] border border-zinc-200/50 bg-white shadow-[0_20px_60px_-15px_rgba(24,24,27,0.06)]">
                <div className="flex items-center gap-2 border-b border-zinc-100 px-6 py-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <div className="ml-6 flex items-center gap-5">
                    <div className="h-2 w-14 rounded-full bg-emerald-500" />
                    <div className="h-2 w-12 rounded-full bg-zinc-200" />
                    <div className="h-2 w-10 rounded-full bg-zinc-200" />
                  </div>
                  <div className="ml-auto h-6 w-6 rounded-full bg-zinc-100" />
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Uptime", value: "99.97%", dot: "bg-emerald-500" },
                      { label: "Avg. Latency", value: "42ms", dot: "bg-emerald-500" },
                      { label: "Active", value: "847", dot: "bg-zinc-500" },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-3.5">
                        <div className="h-2 w-12 rounded bg-zinc-200" />
                        <div className="mt-2 h-5 w-16 rounded bg-zinc-200" />
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <div className={`h-1.5 w-1.5 rounded-full ${stat.dot}`} />
                          <div className="h-1.5 w-10 rounded bg-zinc-200" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-28 rounded bg-zinc-100" />
                      <div className="h-2 w-12 rounded bg-zinc-100" />
                    </div>
                    <div className="flex items-end gap-1.5 h-28">
                      {[35, 55, 40, 70, 50, 85, 65, 45, 75, 60, 90, 50].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-emerald-200 to-emerald-100"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-8 rounded bg-zinc-100" />
                      <div className="h-2 w-8 rounded bg-zinc-100" />
                      <div className="h-2 w-8 rounded bg-zinc-100" />
                      <div className="h-2 w-8 rounded bg-zinc-100" />
                      <div className="h-2 w-8 rounded bg-zinc-100" />
                      <div className="h-2 w-8 rounded bg-zinc-100" />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="h-3 w-24 rounded bg-zinc-100" />
                    {[
                      { dot: "bg-emerald-500", w1: 55, w2: 35 },
                      { dot: "bg-amber-500", w1: 45, w2: 25 },
                      { dot: "bg-zinc-300", w1: 50, w2: 30 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${item.dot}`} />
                        <div className="h-2 flex-1 rounded bg-zinc-100" style={{ width: `${item.w1}%` }} />
                        <div className="h-2 w-12 rounded bg-zinc-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <FloatingMetric
                label="Avg. Response"
                value="1.2s"
                delay={0.8}
                className="hidden xl:block -right-8 top-12"
              />
              <FloatingMetric
                label="Active Monitors"
                value="847"
                delay={1.0}
                className="hidden xl:block -left-8 bottom-28"
              />
              <FloatingMetric
                label="Anomalies Caught"
                value="13"
                delay={1.2}
                className="hidden xl:block -right-4 bottom-20"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-zinc-100/50 blur-3xl" />
      </div>
    </section>
  );
}
