import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Базовый",
    price: "990 ₽",
    period: "/ мес",
    description: "Чтобы попробовать формат и иметь подстраховку на месяц.",
    features: ["4 звонка по 5–15 минут", "Подбор психолога системой", "Отмена в любой момент"],
    highlighted: false,
  },
  {
    name: "Без ограничений",
    price: "2 490 ₽",
    period: "/ мес",
    description: "Для тех, кому поддержка может понадобиться чаще.",
    features: [
      "Безлимит звонков 5–15 минут",
      "Приоритетный поиск психолога",
      "Выбор специализации психолога",
      "Отмена в любой момент",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Подписка"
          align="center"
          title="Простая цена. Без разовых платежей"
          description="Платите заранее — и не думаете о цене звонка в момент, когда тяжело."
          className="mx-auto"
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-7",
                  plan.highlighted
                    ? "border-primary bg-card shadow-lg shadow-primary/15"
                    : "border-border bg-card"
                )}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Популярный выбор
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  className="mt-7 h-12 rounded-full text-base"
                  render={<Link href="/#waitlist" />}
                >
                  Оставить заявку
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Первый звонок — бесплатно на любом тарифе
        </p>
      </Container>
    </section>
  );
}
