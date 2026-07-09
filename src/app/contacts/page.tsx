import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contacts/contact-form";

export const metadata: Metadata = {
  title: "Контакты — WarmTalk",
  description: "Свяжитесь с командой «WarmTalk».",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero eyebrow="Контакты" title="Мы на связи" />

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">hello@warmtalk.ru</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <MessageSquare className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Чат поддержки</p>
                <p className="text-sm text-muted-foreground">Доступен в личном кабинете 24/7</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
