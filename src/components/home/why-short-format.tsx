import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Check, X } from "lucide-react";

const ROWS = [
  { classic: "Запись за несколько дней", warmtalk: "Ответ за секунды" },
  { classic: "Нужно выбрать «своего» терапевта", warmtalk: "Система сама находит свободного" },
  { classic: "Час — большое обязательство", warmtalk: "5–15 минут — легко решиться" },
  { classic: "Для проработки глубоких тем", warmtalk: "Для острого момента здесь и сейчас" },
];

export function WhyShortFormat() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Почему 5–15 минут
          </span>
          <h2 className="balance mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Это не мало.
            <br />
            Это ровно столько, сколько нужно.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            «WarmTalk» — это не терапия часового формата. Это первая помощь для
            психики: короткий разговор, который снимает острое напряжение
            прямо сейчас. Низкая длительность — не ограничение, а осознанный
            выбор: так легче решиться на звонок в первый раз, и так реалистичнее
            встроить поддержку в обычный день.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border border-b border-border bg-secondary/50 text-sm font-semibold">
              <div className="flex items-center gap-2 px-5 py-4 text-muted-foreground">
                <X className="size-4" /> Классическая терапия
              </div>
              <div className="flex items-center gap-2 px-5 py-4 text-primary">
                <Check className="size-4" /> WarmTalk
              </div>
            </div>
            {ROWS.map((row) => (
              <div
                key={row.classic}
                className="grid grid-cols-2 divide-x divide-border border-b border-border text-sm last:border-0"
              >
                <div className="px-5 py-4 text-muted-foreground">{row.classic}</div>
                <div className="px-5 py-4 font-medium text-foreground">{row.warmtalk}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
