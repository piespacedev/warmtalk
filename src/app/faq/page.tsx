import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_GROUPS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ — WarmTalk",
  description: "Ответы на вопросы о цене, приватности, формате звонков и психологах сервиса «WarmTalk».",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Ответы на вопросы"
        description="Если не нашли ответ — напишите нам, ответим в течение дня."
      />

      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-10">
            {FAQ_GROUPS.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 0.06}>
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  {group.title}
                </h2>
                <Accordion className="rounded-3xl border border-border bg-card px-6">
                  {group.items.map((item) => (
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
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
