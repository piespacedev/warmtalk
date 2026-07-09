import type { Metadata } from "next";
import { AlertTriangle, GraduationCap, MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "О сервисе — WarmTalk",
  description: "Философия, границы и подход к отбору психологов сервиса «WarmTalk».",
};

const VALUES = [
  { icon: Sparkles, title: "Скорость", text: "Помощь важна, когда она нужна — не через три дня." },
  { icon: ShieldCheck, title: "Приватность", text: "Можно оставаться анонимным и не сохранять записи звонков." },
  { icon: Users, title: "Человечность", text: "Не скрипты и боты — только живые психологи." },
];

const SELECTION = [
  "Профильное высшее образование в психологии",
  "Опыт консультирования от 2 лет",
  "Собеседование с методологом сервиса",
  "Регулярная супервизия и обратная связь по звонкам",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О сервисе"
        title="Мы не заменяем терапию. Мы рядом в моменте"
        description="«WarmTalk» появился из простого наблюдения: людям редко не хватает желания получить помощь — им не хватает доступа к ней именно тогда, когда действительно тяжело."
      />

      <section className="py-14 sm:py-20">
        <Container className="grid gap-5 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Отбор психологов
            </span>
            <h2 className="balance mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Каждый специалист проходит проверку до первого звонка
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3">
              {SELECTION.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                  <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                  <AlertTriangle className="size-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Чего мы не делаем</h2>
              </div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                «WarmTalk» — не экстренная психиатрическая служба и не замена очной терапии
                при хронических состояниях. Мы не ставим диагнозы и не назначаем лечение.
                Если вы или кто-то рядом находится в опасности для жизни — звоните 112
                или на всероссийский телефон доверия 8&nbsp;800&nbsp;2000&nbsp;122. Мы всегда
                покажем эти номера в кабинете, если увидим, что ситуация требует
                немедленной помощи.
              </p>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="size-4" />
                При долгосрочных запросах мы порекомендуем очного специалиста
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
