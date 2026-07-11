"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const WAVEFORM_BARS = [0.4, 0.75, 1, 0.55, 0.85, 0.35, 0.65];

/**
 * Живой видеокадр для демо-звонка: тёплое амбиентное свечение,
 * "дышащий" аватар с расходящимися кольцами (как звуковые волны голоса)
 * и аудио-волна снизу — создаёт ощущение активного разговора без
 * настоящего видео.
 */
export function CallVisual({
  initials,
  gradientClass,
  avatarSize = "size-20",
  className,
  children,
}: {
  initials: string;
  gradientClass: string;
  avatarSize?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#2B2320] to-[#453A33]",
        className
      )}
    >
      {/* амбиентное свечение */}
      <motion.div
        className="absolute -left-10 -top-10 size-40 rounded-full bg-lavender/25 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-12 -right-8 size-44 rounded-full bg-primary/25 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative flex flex-col items-center gap-3">
        <div className="relative flex items-center justify-center">
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border border-white/25"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 1.3,
              }}
            />
          ))}
          <motion.div
            className={cn(
              "relative flex items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white",
              avatarSize,
              gradientClass
            )}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            {initials}
          </motion.div>
        </div>

        {/* аудио-волна — сигнал, что человек сейчас говорит */}
        <div className="flex h-4 items-center gap-[3px]">
          {WAVEFORM_BARS.map((base, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-white/70"
              animate={{ height: [`${base * 30}%`, "100%", `${base * 45}%`] }}
              transition={{
                duration: 0.9 + (i % 3) * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
            />
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
