"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagnifyingGlass } from "@/lib/icons";

const prompts = [
  "Show me all failed deploys this week...",
  "Compare conversion rates by region...",
  "Find anomalies in the payment pipeline...",
  "Generate a performance summary for Q2...",
  "Alert me when latency exceeds 200ms...",
];

export default function CommandInput() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const currentPrompt = prompts[promptIndex];

    if (isProcessing) {
      const timer = setTimeout(() => {
        setIsProcessing(false);
        setIsDeleting(true);
      }, 1200);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && charIndex < currentPrompt.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 40);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && charIndex >= currentPrompt.length) {
      const timer = setTimeout(() => setIsProcessing(true), 600);
      return () => clearTimeout(timer);
    }

    if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => setCharIndex((c) => c - 1), 20);
      return () => clearTimeout(timer);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPromptIndex((i) => (i + 1) % prompts.length);
    }
  }, [charIndex, isDeleting, isProcessing, promptIndex]);

  return (
    <div className="relative">
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 transition-all",
          isProcessing
            ? "border-emerald-200 shadow-[0_0_24px_-8px_rgba(16,185,129,0.15)]"
            : "border-zinc-200"
        )}
      >
        <MagnifyingGlass
          className={cn(
            "h-5 w-5 shrink-0 transition-colors",
            isProcessing ? "text-emerald-500" : "text-zinc-400"
          )}
        />
        <div className="flex-1 font-mono text-sm text-zinc-700">
          {isProcessing ? (
            <span className="flex items-center gap-2 text-emerald-600">
              Processing
              <span className="flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="inline-block h-1 w-1 rounded-full bg-emerald-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </span>
            </span>
          ) : (
            <>
              {prompts[promptIndex].slice(0, charIndex)}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="ml-px inline-block h-4 w-[2px] bg-zinc-700"
              />
            </>
          )}
        </div>
        {!isProcessing && charIndex === prompts[promptIndex].length && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />
        )}
      </div>
    </div>
  );
}
