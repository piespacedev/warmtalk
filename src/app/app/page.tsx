import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CabinetView } from "@/components/cabinet/cabinet-view";

export const metadata: Metadata = {
  title: "Личный кабинет — WarmTalk",
  description: "Нажмите кнопку — и через минуту вы говорите с психологом.",
};

export default function AppPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4 sm:mb-8">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
          <p className="text-sm text-accent-foreground">
            Это демо-версия личного кабинета — сервис ещё не запущен. Чтобы
            получить доступ к настоящим звонкам первыми,{" "}
            <Link href="/#waitlist" className="font-semibold underline underline-offset-2">
              оставьте контакт здесь
            </Link>
            .
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-1 sm:mb-10">
          <span className="text-sm font-medium text-muted-foreground">
            С возвращением
          </span>
          <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Привет, Мария
          </h1>
        </div>

        <CabinetView />
      </Container>
    </section>
  );
}
