"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Pen, ChatCircle, ShareNetwork, DotsThree } from "@/lib/icons";

const toolbarItems = [
  { icon: Pen, label: "Edit" },
  { icon: ChatCircle, label: "Comment" },
  { icon: ShareNetwork, label: "Share" },
  { icon: DotsThree, label: "More" },
];

const highlightBlocks = [
  { id: "h1", text: "Monitor every endpoint in your stack", width: "w-[80%]" },
  { id: "h2", text: "Detect anomalies before they escalate", width: "w-[65%]" },
  { id: "h3", text: "Route alerts to the right channel", width: "w-[70%]" },
];

export default function ContextualUI() {
  return (
    <div className="relative rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-zinc-200" />
        <div className="h-2 w-2 rounded-full bg-zinc-200" />
        <div className="h-2 w-2 rounded-full bg-zinc-200" />
        <span className="ml-2 text-xs font-medium text-zinc-400">incident-report.md</span>
      </div>

      <div className="space-y-3">
        {highlightBlocks.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.4, duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className={cn(
                "h-3 rounded bg-zinc-100",
                block.width
              )}
              animate={{
                backgroundColor: ["#f4f4f5", "#d1fae5", "#f4f4f5"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="mt-1.5 h-2.5 rounded bg-zinc-50"
              style={{ width: `${parseInt(block.width.replace(/[^0-9]/g, "")) - 15}%` }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, type: "spring" as const, stiffness: 100, damping: 20 }}
        className="mt-5 flex items-center gap-1 rounded-xl border border-zinc-100 bg-zinc-50/80 p-1.5"
      >
        {toolbarItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-white hover:text-zinc-800"
          >
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
