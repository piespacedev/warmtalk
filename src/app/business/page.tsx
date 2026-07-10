import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Clock,
  EyeOff,
  HeartPulse,
  MessagesSquare,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BusinessLeadForm } from "@/components/business/business-lead-form";

export const metadata: Metadata = {
  title: "Для бизнеса — WarmTalk",
  description:
    "Психологическая поддержка для команды в момент, когда она нужна. Мгновенная эмоциональная помощь сотрудникам 24/7, анонимно, с аналитикой для HR.",
};

const STATS = [
  { value: "72%", label: "сотрудников хотя бы раз выгорали на работе" },
  { value: "×2", label: "риск увольнения у сотрудников в сильном стрессе" },
  { value: "1 клик", label: "и сотрудник уже говорит с психологом" },
];

const FEATURES = [
  {
    icon: Clock,
    title: "Доступ 24/7 без записи",
    text: "Сотрудник получает поддержку в момент стресса — перед сложной встречей, после конфликта, при выгорании. Не через неделю, а сейчас.",
  },
  {
    icon: EyeOff,
    title: "Полная анонимность",
    text: "Человек может не включать камеру и не называть фамилию. Компания не видит, кто именно обращался — только общую статистику.",
  },
  {
    icon: BarChart3,
    title: "Кабинет для HR",
    text: "Обезличенная аналитика: вовлечённость, динамика обращений, частые темы. Данные для решений — без нарушения приватности людей.",
  },
  {
    icon: Wallet,
    title: "Гибкая оплата",
    text: "Полная компенсация, софинансирование с сотрудником или оплата по факту обращений. Настраиваем под ваш бюджет.",
  },
  {
    icon: MessagesSquare,
    title: "Групповые вебинары",
    text: "Воркшопы для команды на актуальные темы: выгорание, тревога, баланс работы и жизни. Профилактика, а не только помощь в кризисе.",
  },
  {
    icon: HeartPulse,
    title: "Забота как часть бренда",
    text: "Реальная поддержка сотрудников усиливает лояльность и HR-бренд — сильный аргумент при найме и удержании людей.",
  },
];

const PRICING = [
  {
    name: "Полная компенсация",
    text: "Компания оплачивает обращения сотрудников целиком. Максимальная забота и охват команды.",
  },
  {
    name: "Софинансирование",
    text: "Компания берёт на себя часть стоимости, сотрудник — остальное. Баланс бюджета и вовлечённости.",
  },
  {
    name: "Оплата по факту",
    text: "Платите только за реальные обращения. Прозрачно и без переплаты за неиспользованное.",
  },
];

const STEPS = [
  {
    title: "Обсуждаем задачу",
    text: "Созваниваемся, разбираем запрос команды и подбираем модель оплаты под ваш бюджет.",
  },
  {
    title: "Подключаем сотрудников",
    text: "Даём корпоративный доступ и помогаем донести ценность людям — чтобы поддержкой действительно пользовались.",
  },
  {
    title: "Даём аналитику",
    text: "HR получает обезличенные отчёты о вовлечённости и динамике — видно, как забота работает на команду.",
  },
];

const FAQ = [
  {
    id: "b-conf",
    question: "Узнает ли компания, кто из сотрудников обращался?",
    answer:
      "Нет. Сотрудники обращаются анонимно, компания видит только обезличенную статистику: сколько обращений, какие темы, общая динамика. Персональные данные и содержание разговоров не раскрываются.",
  },
  {
    id: "b-roi",
    question: "Зачем это бизнесу, а не просто ДМС?",
    answer:
      "Стресс и выгорание напрямую бьют по продуктивности и текучести. ДМС закрывает физическое здоровье, но не эмоциональное состояние. Мгновенная поддержка снимает острые состояния до того, как они приведут к больничным, ошибкам и увольнениям.",
  },
  {
    id: "b-diff",
    question: "Чем WarmTalk отличается от корпоративной терапии?",
    answer:
      "Классическая терапия — это записанные сессии по часу. WarmTalk — эмоциональная скорая: короткий разговор 5–15 минут в тот момент, когда человеку тяжело прямо сейчас. Форматы дополняют друг друга, но именно мгновенность закрывает острые ситуации.",
  },
  {
    id: "b-start",
    question: "Как быстро можно подключить команду?",
    answer:
      "После обсуждения задачи и выбора модели оплаты подключение занимает считанные дни. Оставьте заявку — мы свяжемся и подготовим предложение под размер вашей команды.",
  },
];

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[#FFEDE7] via-background to-background" />
        <Container className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            <Sparkles className="size-3.5" />
            WarmTalk для бизнеса
          </div>
          <h1 className="balance mt-6 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
            Поддержка для команды в момент, когда она нужна
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Мгновенная психологическая помощь сотрудникам — за секунды, без
            записи, анонимно. Меньше выгорания и текучести, сильнее HR-бренд.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-14 rounded-full px-8 text-base shadow-lg shadow-primary/30"
              render={<Link href="#b2b-form" />}
            >
              Оставить заявку
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-border bg-background px-8 text-base"
              render={<Link href="#how" />}
            >
              Как это работает
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-border/70 bg-secondary/40 py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                  {s.value}
                </div>
                <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why instant */}
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Наше отличие"
            align="center"
            title="Не «запишись на терапию», а «поговори сейчас»"
            description="Стресс на работе редко ждёт удобного времени. Наш формат — эмоциональная скорая: короткий разговор с психологом в острый момент, когда человеку тяжело именно сейчас. Это снимает напряжение до того, как оно превратится в выгорание, больничный или заявление об уходе."
            className="mx-auto"
          />
        </Container>
      </section>

      {/* Features */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Что получает компания"
            align="center"
            title="Забота о команде, встроенная в рабочий день"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing models */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Модели оплаты"
            align="center"
            title="Гибко под ваш бюджет"
            description="Точную стоимость рассчитаем под размер команды и выбранную модель — оставьте заявку."
            className="mx-auto"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {PRICING.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How to connect */}
      <section id="how" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Как подключить"
            align="center"
            title="Три шага до запуска"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <span className="font-heading text-sm font-bold text-primary/50">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Вопросы бизнеса"
            align="center"
            title="Коротко о главном"
            className="mx-auto"
          />
          <Reveal className="mt-12">
            <Accordion className="rounded-3xl border border-border bg-card px-6">
              {FAQ.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="py-5 text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </Container>
      </section>

      {/* Lead form */}
      <section id="b2b-form" className="scroll-mt-24 pb-20 sm:pb-28">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="Заявка"
            align="center"
            title="Обсудим поддержку для вашей команды"
            description="Оставьте контакты — свяжемся в течение рабочего дня и подготовим предложение."
            className="mx-auto"
          />
          <div className="mt-10">
            <BusinessLeadForm />
          </div>
        </Container>
      </section>
    </>
  );
}
