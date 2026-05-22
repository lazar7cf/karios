"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bell, X } from "@/lib/icons";

const notifications = [
  { id: "n1", title: "Pipeline #847 passed", type: "success" },
  { id: "n2", title: "Latency spike on us-east-1", type: "warning" },
  { id: "n3", title: "New deploy ready v2.4.1", type: "info" },
  { id: "n4", title: "DB connection pool full", type: "error" },
];

export default function LiveStatus() {
  const [activeNotif, setActiveNotif] = useState<typeof notifications[number] | null>(null);
  const [showBadge, setShowBadge] = useState(false);

  const cycleNotification = useCallback(() => {
    const next = notifications[Math.floor(Math.random() * notifications.length)];
    setActiveNotif(next);
    setShowBadge(true);
    setTimeout(() => setShowBadge(false), 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleNotification, 5000);
    cycleNotification();
    return () => clearInterval(interval);
  }, [cycleNotification]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="h-5 w-5 text-zinc-500" />
            <AnimatePresence>
              {showBadge && (
                <motion.span
                  key={activeNotif?.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
                  className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
                />
              )}
            </AnimatePresence>
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-400">Notifications</p>
            <p className="text-sm font-medium text-zinc-700">3 unread</p>
          </div>
        </div>
        <div className="flex -space-x-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-6 w-6 overflow-hidden rounded-full border-2 border-white"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              <img
                src={`https://picsum.photos/seed/team${i}/60/60`}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 rounded-xl border border-zinc-100 bg-white px-4 py-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-zinc-700">API Gateway</span>
          <span className="ml-auto text-xs text-zinc-400">99.8% uptime</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-zinc-100 bg-white px-4 py-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-zinc-700">Worker Pool</span>
          <span className="ml-auto text-xs text-zinc-400">12/16 active</span>
        </div>
      </div>

      <AnimatePresence>
        {showBadge && activeNotif && (
          <motion.div
            key={activeNotif.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
            className={cn(
              "absolute -top-2 right-0 flex items-center gap-2 rounded-xl border px-3 py-2 shadow-lg",
              "border-emerald-200 bg-emerald-50"
            )}
          >
            <span className="text-xs font-medium text-emerald-800">
              {activeNotif.title}
            </span>
            <button
              onClick={() => setShowBadge(false)}
              className="text-emerald-400 hover:text-emerald-600"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
