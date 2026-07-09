import type { Metadata } from "next";
import { Banknote, CalendarCheck, GraduationCap, Home, Users2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ApplicationForm } from "@/components/psychologists/application-form";

export const metadata: Metadata = {
  title: "Для психологов — WarmTalk",
  description: "Гибкий график, оплата за сессию и клиенты без поиска — работайте с «WarmTalk».",
};

const BENEFITS = [
  { icon: CalendarCheck, title: "Гибкий график", text: "Берёте звонки тогда, когда удобно — хоть час в день, хоть полную занятость." },
  { icon: Banknote, title: "Оплата за сессию", text: "Прозрачная ставка за каждый звонок, выплаты дважды в месяц." },
  { icon: Home, title: "Из любой точки", text: "Работаете удалённо — нужен только компьютер и стабильный интернет." },
  { icon: Users2, title: "Клиенты без поиска", text: "Система сама подбирает вам звонки — не нужно вести маркетинг." },
];

const REQUIREMENTS = [
  "Высшее психологическое образование",
  "Опыт консультирования от 2 лет",
  "Готовность работать в коротком формате 5–15 минут",
  "Стабильный интернет и тихое место для звонков",
];

export default function ForPsychologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Для психологов"
        title="Работайте тогда, когда удобно вам"
        description="Присоединяйтесь к WarmTalk и получайте звонки от людей, которым нужна поддержка прямо сейчас — без поиска клиентов и лишней бюрократии."
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-3xl border border-border bg-card p-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <b.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <GraduationCap className="size-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Что нужно, чтобы начать
              </h2>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="rounded-2xl border border-border bg-card px-5 py-3.5 text-sm text-foreground">
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
              Оставить заявку
            </h2>
            <div className="mt-8">
              <ApplicationForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
