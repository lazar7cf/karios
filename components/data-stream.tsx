"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendUp, TrendDown, Minus } from "@/lib/icons";

const metrics = [
  { label: "API Latency", value: "142ms", change: "up", pct: "+3.2%" },
  { label: "Throughput", value: "2.4k req/s", change: "up", pct: "+8.7%" },
  { label: "Error Rate", value: "0.03%", change: "down", pct: "-12.1%" },
  { label: "Active Users", value: "1,847", change: "up", pct: "+5.4%" },
  { label: "Avg. Session", value: "8.2m", change: "down", pct: "-1.3%" },
  { label: "Cache Hit", value: "94.7%", change: "up", pct: "+0.8%" },
];

const changeIcon = {
  up: TrendUp,
  down: TrendDown,
  stable: Minus,
};

const changeColor = {
  up: "text-emerald-500",
  down: "text-rose-400",
  stable: "text-zinc-400",
};

function MetricCard({ label, value, change, pct }: typeof metrics[number]) {
  const Icon = changeIcon[change as keyof typeof changeIcon];
  return (
    <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-zinc-200/50 bg-white px-5 py-3 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
      <div>
        <p className="whitespace-nowrap text-xs font-medium text-zinc-400">{label}</p>
        <p className="whitespace-nowrap text-lg font-semibold tracking-tight text-zinc-900">
          {value}
        </p>
      </div>
      <div className={cn("flex items-center gap-1", changeColor[change as keyof typeof changeColor])}>
        <Icon className="h-3.5 w-3.5" />
        <span className="text-xs font-medium">{pct}</span>
      </div>
    </div>
  );
}

export default function DataStream() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...metrics, ...metrics].map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </motion.div>
    </div>
  );
}
