"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, PhoneOff, Star, Video, VideoOff, X } from "lucide-react";
import { SubscriptionCard } from "@/components/cabinet/subscription-card";
import { SessionHistory } from "@/components/cabinet/session-history";
import {
  INITIAL_HISTORY,
  PSYCHOLOGISTS,
  SUBSCRIPTION,
  type Psychologist,
  type SessionRecord,
} from "@/lib/cabinet-data";

type Stage = "idle" | "searching" | "found" | "call" | "ended";

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function CabinetView() {
  const [stage, setStage] = useState<Stage>("idle");
  const [psychologist, setPsychologist] = useState<Psychologist | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [rating, setRating] = useState(0);
  const [muted, setMuted] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [history, setHistory] = useState<SessionRecord[]>(INITIAL_HISTORY);
  const [callsUsed, setCallsUsed] = useState(SUBSCRIPTION.callsUsedThisMonth);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (interval.current) clearInterval(interval.current);
  };

  useEffect(() => () => clearAll(), []);

  function startSearch() {
    clearAll();
    setPsychologist(null);
    setSeconds(0);
    setRating(0);
    setStage("searching");

    const t1 = setTimeout(() => {
      const pick =
        PSYCHOLOGISTS[Math.floor(Math.random() * PSYCHOLOGISTS.length)];
      setPsychologist(pick);
      setStage("found");
    }, 1800 + Math.random() * 900);

    const t2 = setTimeout(() => {
      setStage((s) => (s === "found" ? "call" : s));
    }, 4200);

    timers.current.push(t1, t2);
  }

  function cancelSearch() {
    clearAll();
    setStage("idle");
  }

  useEffect(() => {
    if (stage === "call") {
      interval.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [stage]);

  function endCall() {
    clearAll();
    setStage("ended");
  }

  function finishAndReturn() {
    if (psychologist) {
      const record: SessionRecord = {
        id: `h-${Date.now()}`,
        psychologistName: psychologist.name,
        date: "только что",
        duration: formatDuration(seconds),
        rating: rating || 5,
      };
      setHistory((h) => [record, ...h]);
      setCallsUsed((c) => c + 1);
    }
    setStage("idle");
    setPsychologist(null);
    setSeconds(0);
    setRating(0);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-lavender/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative flex min-h-[420px] flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {stage === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div className="relative flex size-56 items-center justify-center">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <button
                    onClick={startSearch}
                    className="relative flex size-44 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-br from-primary to-[#FF8A6B] text-lg font-semibold text-white shadow-xl shadow-primary/40 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Поговорить
                    <br />с психологом
                  </button>
                </div>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Нажмите — и мы найдём свободного психолога за 30–90 секунд
                </p>
              </motion.div>
            )}

            {stage === "searching" && (
              <motion.div
                key="searching"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="relative flex size-40 items-center justify-center rounded-full border-4 border-dashed border-primary/30">
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="text-sm font-medium text-muted-foreground">
                    Ищем…
                  </span>
                </div>
                <p className="text-base font-medium text-foreground">
                  Ищем свободного психолога
                </p>
                <button
                  onClick={cancelSearch}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="size-4" />
                  Отменить
                </button>
              </motion.div>
            )}

            {stage === "found" && psychologist && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="flex w-full max-w-xs flex-col items-center gap-4 rounded-3xl border border-border bg-secondary/60 p-7"
              >
                <div
                  className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${psychologist.gradient} text-xl font-semibold text-white`}
                >
                  {psychologist.initials}
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-foreground">
                    {psychologist.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {psychologist.specialization}
                  </p>
                </div>
                <p className="text-sm font-medium text-success">
                  Звонок начнётся через мгновение…
                </p>
              </motion.div>
            )}

            {stage === "call" && psychologist && (
              <motion.div
                key="call"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="flex w-full max-w-md flex-col items-center gap-6"
              >
                <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2B2320] to-[#453A33]">
                  <div
                    className={`flex size-20 items-center justify-center rounded-full bg-gradient-to-br ${psychologist.gradient} text-xl font-semibold text-white`}
                  >
                    {psychologist.initials}
                  </div>
                  <span className="absolute top-4 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white tabular-nums">
                    {formatDuration(seconds)}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white">
                    {psychologist.name}
                  </span>
                  {!cameraOn && (
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white">
                      Ваша камера выключена
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setMuted((m) => !m)}
                    className={`flex size-12 items-center justify-center rounded-full transition-colors ${
                      muted ? "bg-destructive/15 text-destructive" : "bg-secondary text-foreground"
                    }`}
                  >
                    {muted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
                  </button>
                  <button
                    onClick={() => setCameraOn((c) => !c)}
                    className={`flex size-12 items-center justify-center rounded-full transition-colors ${
                      !cameraOn ? "bg-destructive/15 text-destructive" : "bg-secondary text-foreground"
                    }`}
                  >
                    {cameraOn ? <Video className="size-5" /> : <VideoOff className="size-5" />}
                  </button>
                  <button
                    onClick={endCall}
                    className="flex size-12 items-center justify-center rounded-full bg-destructive text-white transition-transform hover:scale-105"
                  >
                    <PhoneOff className="size-5" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Демо-звонок · в сервисе разговор длится 5–15 минут
                </p>
              </motion.div>
            )}

            {stage === "ended" && (
              <motion.div
                key="ended"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="flex w-full max-w-xs flex-col items-center gap-5 text-center"
              >
                <p className="text-lg font-semibold text-foreground">
                  Как прошёл разговор?
                </p>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button key={i} onClick={() => setRating(i + 1)}>
                      <Star
                        className={`size-7 transition-colors ${
                          i < rating ? "fill-primary text-primary" : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <button
                  onClick={finishAndReturn}
                  className="mt-2 h-12 w-full rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Вернуться в кабинет
                </button>
                <p className="text-xs text-muted-foreground">
                  Это был демо-звонок. Хотите поговорить по-настоящему, когда
                  мы запустимся?{" "}
                  <Link href="/#waitlist" className="font-medium text-foreground underline underline-offset-2">
                    Оставить контакт
                  </Link>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SubscriptionCard
          plan={SUBSCRIPTION.plan}
          renewsOn={SUBSCRIPTION.renewsOn}
          callsUsedThisMonth={callsUsed}
        />
        <SessionHistory records={history} />
      </div>
    </div>
  );
}
