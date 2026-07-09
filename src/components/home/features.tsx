import { Zap, EyeOff, Wallet, ShieldCheck, Moon, Repeat } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const FEATURES = [
  { icon: Zap, title: "Мгновенно", text: "Психолог на связи за 30–90 секунд, без записи." },
  { icon: EyeOff, title: "Анонимно", text: "Можно не включать камеру и не называть фамилию." },
  { icon: Wallet, title: "По подписке", text: "Фиксированная цена в месяц — без разовых трат в момент, когда плохо." },
  { icon: ShieldCheck, title: "Проверенные психологи", text: "Дипломы, супервизия и отбор перед началом работы." },
  { icon: Moon, title: "Доступно 24/7", text: "Тревога не смотрит на часы — и мы тоже." },
  { icon: Repeat, title: "Можно возвращаться", text: "Столько звонков, сколько включено в тариф, каждый месяц." },
];

export function Features() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Преимущества"
          align="center"
          title="Всё, что нужно в момент, когда тяжело"
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
  );
}
