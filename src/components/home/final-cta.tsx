import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { WaitlistForm } from "@/components/shared/waitlist-form";

export function FinalCta() {
  return (
    <section id="waitlist" className="scroll-mt-24 pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-[#FF7F65] to-lavender px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-16 -left-16 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-white/10 blur-3xl" />

            <span className="relative inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
              Мы ещё не запустились
            </span>
            <h2 className="balance relative mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Плохие дни случаются. Хорошо, когда есть, кому позвонить.
            </h2>
            <p className="relative mt-4 text-white/85">
              Оставьте контакт — сообщим первыми о запуске и подарим бесплатный месяц подписки.
            </p>
            <div className="relative mx-auto mt-8 max-w-md">
              <WaitlistForm inverted />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
