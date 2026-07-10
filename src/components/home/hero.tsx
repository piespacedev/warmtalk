"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { HeroDemo } from "@/components/home/hero-demo";
import { reachGoal } from "@/lib/metrika";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-[#FFEDE7] via-background to-background" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-accent-foreground">
            <Sparkles className="size-3.5" />
            Психолог на связи за секунды
          </div>

          <h1 className="balance mt-6 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
            Психологу можно позвонить.{" "}
            <span className="text-primary">Прямо сейчас.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Одна кнопка — и через минуту вы говорите с живым психологом.
            Без записи, без ожидания в очереди. 5–15 минут, когда это
            действительно нужно.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-14 rounded-full px-8 text-base shadow-lg shadow-primary/30"
              render={<Link href="/app" />}
              onClick={() => reachGoal("hero_demo_click")}
            >
              Посмотреть демо
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-border bg-background px-8 text-base"
              render={<Link href="/#waitlist" />}
              onClick={() => reachGoal("hero_waitlist_click")}
            >
              Оставить контакт
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Так это будет работать после запуска · Сейчас доступна демо-версия
          </p>
        </div>

        <HeroDemo />
      </Container>
    </section>
  );
}
