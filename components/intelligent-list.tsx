"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, AlertCircle } from "@/lib/icons";

const initialItems = [
  { id: "1", label: "Deploy v2.4.1 to staging", status: "active", priority: 3 },
  { id: "2", label: "Review PR #847 — auth flow", status: "pending", priority: 1 },
  { id: "3", label: "Run E2E regression suite", status: "active", priority: 4 },
  { id: "4", label: "Update API rate limits", status: "pending", priority: 2 },
  { id: "5", label: "Audit dependency tree", status: "pending", priority: 5 },
  { id: "6", label: "Rotate database credentials", status: "pending", priority: 6 },
];

const statusIcons = {
  active: CheckCircle,
  pending: Clock,
  error: AlertCircle,
} as const;

const statusColors = {
  active: "text-emerald-500",
  pending: "text-zinc-300",
  error: "text-rose-400",
} as const;

const itemTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export default function IntelligentList() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const sorted = [...prev].sort((a, b) => {
          if (a.status === "active" && b.status !== "active") return -1;
          if (a.status !== "active" && b.status === "active") return 1;
          return a.priority - b.priority;
        });
        const last = sorted.pop();
        if (last) sorted.unshift({ ...last, priority: sorted.length + 1 });
        return sorted.map((item, i) => ({ ...item, priority: i + 1 }));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const Icon = statusIcons[item.status as keyof typeof statusIcons];
        return (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={itemTransition}
            className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3"
          >
            <Icon
              className={cn(
                "h-4 w-4 shrink-0",
                statusColors[item.status as keyof typeof statusColors]
              )}
            />
            <span className="flex-1 truncate text-sm font-medium text-zinc-700">
              {item.label}
            </span>
            <span className="shrink-0 rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500">
              P{item.priority}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
