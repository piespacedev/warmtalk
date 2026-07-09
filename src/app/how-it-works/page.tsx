import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  LogIn,
  MousePointerClick,
  Search,
  Smile,
  Video,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Как это работает — WarmTalk",
  description: "От «мне плохо» до разговора с психологом — пять шагов и пара минут.",
};

const STEPS = [
  {
    icon: LogIn,
    title: "Открываете личный кабинет",
    text: "Заходите с телефона или компьютера — вход занимает секунды, никакой анкеты заполнять не нужно.",
  },
  {
    icon: MousePointerClick,
    title: "Нажимаете «Поговорить с психологом»",
    text: "Одна кнопка в центре экрана. Больше ничего выбирать не нужно.",
  },
  {
    icon: Search,
    title: "Система ищет свободного специалиста",
    text: "Мы автоматически находим психолога подходящего профиля, который сейчас на связи — обычно 30–90 секунд.",
  },
  {
    icon: Video,
    title: "Звонок начинается сам",
    text: "Как только психолог найден, видеозвонок подключается автоматически — вам не нужно ничего нажимать.",
  },
  {
    icon: Smile,
    title: "Говорите 5–15 минут",
    text: "Ровно столько, чтобы снять острое напряжение. После звонка можно оценить разговор и вернуться к делам.",
  },
];

const INCLUDED = [
  { title: "Любое время суток", text: "Психологи на связи 24/7, будни и выходные." },
  { title: "Разные специализации", text: "Тревога, выгорание, отношения, панические атаки и другое." },
  { title: "Можно возвращаться", text: "Столько раз, сколько включено в ваш тариф — каждый месяц." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Как это работает"
        title="От «мне плохо» до разговора — пять шагов"
        description="Никакой записи на удобное время и подбора анкеты. Мы сознательно убрали всё, что можно убрать между вами и разговором."
      />

      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="flex gap-5 rounded-3xl border border-border bg-card p-6">
                  <div className="flex flex-col items-center">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <step.icon className="size-5" />
                    </div>
                    {i < STEPS.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="font-heading text-xs font-bold text-primary/60">
                      Шаг {i + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Что входит в подписку
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {INCLUDED.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Container>
          <Button size="lg" className="h-14 rounded-full px-8 text-base shadow-lg shadow-primary/30" render={<Link href="/app" />}>
            Посмотреть демо
            <ArrowRight className="size-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}
