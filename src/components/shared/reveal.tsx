"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Возвращает false на сервере и при первой отрисовке, true после гидратации —
// без setState в эффекте. Канонический hydration-safe паттерн.
const noopSubscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  // Прогрессивное улучшение: на сервере и до гидратации рендерим контент
  // полностью видимым, чтобы он не оставался скрытым в браузерах, где JS
  // не выполняется или сильно замедлен (например, встроенный браузер Telegram).
  // Анимацию появления включаем только после того, как JS реально отработал.
  const hydrated = useHydrated();

  if (!hydrated) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
