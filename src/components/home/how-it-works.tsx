import { MousePointerClick, Search, Video } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Нажимаете кнопку",
    text: "Открываете кабинет и жмёте «Поговорить с психологом» — в любое время дня и ночи.",
  },
  {
    icon: Search,
    title: "Система ищет специалиста",
    text: "Мы находим свободного психолога подходящего профиля за 30–90 секунд.",
  },
  {
    icon: Video,
    title: "Начинается видеозвонок",
    text: "Разговор длится 5–15 минут — ровно столько, чтобы стало легче.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Как это работает"
          title="Три шага между «мне плохо» и разговором"
          description="Никакой записи на удобное время. Никакого подбора анкеты. Просто нажимаете — и через минуту вы уже не один на один с тревогой."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                <span className="font-heading text-sm font-bold text-primary/50">
                  0{i + 1}
                </span>
                <div className="mt-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
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
  );
}
