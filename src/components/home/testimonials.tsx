import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const REVIEWS = [
  {
    initials: "МК",
    name: "Мария, 27 лет",
    context: "тревога перед собеседованием",
    text: "Позвонила за 20 минут до встречи, на которую боялась идти. Психолог помог разложить мысли по полочкам — и я реально успокоилась.",
  },
  {
    initials: "ДС",
    name: "Дмитрий, 34 года",
    context: "выгорание на работе",
    text: "Не готов был идти на «терапию» с большой буквы. А 10 минут поговорить в перерыве — то, что нужно было.",
  },
  {
    initials: "АП",
    name: "Алина, 22 года",
    context: "одиночество вечером",
    text: "Иногда просто нужно, чтобы кто-то выслушал прямо сейчас. Это первый сервис, где это реально работает так быстро.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          align="center"
          title="Как это ощущается на практике"
          description="Иллюстративные истории — сервис проходит проверку гипотезы, реальные отзывы появятся после пилота."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                <p className="flex-1 text-[15px] leading-relaxed text-foreground/90">
                  «{r.text}»
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-primary text-xs font-semibold text-white">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.context}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
