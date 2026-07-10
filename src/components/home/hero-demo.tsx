"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, PhoneOff, Video } from "lucide-react";

type Stage = "idle" | "searching" | "found" | "call";

const DURATIONS: Record<Stage, number> = {
  idle: 1800,
  searching: 2600,
  found: 1900,
  call: 3200,
};

const NEXT: Record<Stage, Stage> = {
  idle: "searching",
  searching: "found",
  found: "call",
  call: "idle",
};

export function HeroDemo() {
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    const t = setTimeout(() => setStage((s) => NEXT[s]), DURATIONS[stage]);
    return () => clearTimeout(t);
  }, [stage]);

  return (
    <div className="relative mx-auto aspect-[9/11] w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-border/70 bg-card p-6 shadow-[0_30px_70px_-25px_rgba(184,64,46,0.35)]">
      <div className="absolute -top-24 -right-20 size-64 rounded-full bg-lavender/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Личный кабинет</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-success" />
            Подписка активна
          </span>
        </div>

        <div className="relative mt-auto mb-auto flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-5"
              >
                <div className="relative flex size-36 items-center justify-center">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/25"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#FF8A6B] text-center text-sm font-semibold text-white shadow-lg shadow-primary/40">
                    Поговорить
                    <br />с психологом
                  </div>
                </div>
              </motion.div>
            )}

            {stage === "searching" && (
              <motion.div
                key="searching"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative flex size-28 items-center justify-center">
                  <motion.svg
                    className="absolute inset-0 size-full"
                    viewBox="0 0 50 50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="22"
                      fill="none"
                      stroke="var(--primary)"
                      strokeOpacity="0.15"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r="22"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="35 200"
                    />
                  </motion.svg>
                  <span className="text-xs font-medium text-muted-foreground">
                    Ищем…
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  Ищем свободного психолога
                </p>
              </motion.div>
            )}

            {stage === "found" && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="flex w-full flex-col items-center gap-4 rounded-3xl border border-border bg-secondary/60 p-5"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-[#9B90FF] text-lg font-semibold text-white">
                  АС
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    Анна Смирнова
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Тревога и стресс
                  </p>
                </div>
                <p className="text-xs font-medium text-success">
                  Звонок начнётся через мгновение
                </p>
              </motion.div>
            )}

            {stage === "call" && (
              <motion.div
                key="call"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex w-full flex-col items-center gap-4"
              >
                <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B2320] to-[#453A33]">
                  <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-[#9B90FF] text-lg font-semibold text-white">
                    АС
                  </div>
                  <span className="absolute top-3 left-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white">
                    04:12
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                    <Mic className="size-4" />
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                    <Video className="size-4" />
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                    <PhoneOff className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-1.5">
          {(["idle", "searching", "found", "call"] as Stage[]).map((s) => (
            <span
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s === stage ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
