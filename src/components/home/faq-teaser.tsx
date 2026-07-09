import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import { FAQ_GROUPS, FAQ_TEASER_IDS } from "@/lib/faq-data";

const items = FAQ_GROUPS.flatMap((g) => g.items).filter((i) =>
  FAQ_TEASER_IDS.includes(i.id)
);

export function FaqTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Вопросы"
          align="center"
          title="Коротко о главном"
          className="mx-auto"
        />

        <Reveal className="mt-12">
          <Accordion className="rounded-3xl border border-border bg-card px-6">
            {items.map((item) => (
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

        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            className="h-11 rounded-full px-5 text-primary hover:text-primary"
            render={<Link href="/faq" />}
          >
            Все вопросы
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
