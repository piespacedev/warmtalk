import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import {
  OPERATOR,
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
} from "@/lib/legal-data";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — WarmTalk",
  description:
    "Политика в отношении обработки персональных данных сервиса WarmTalk в соответствии с 152-ФЗ.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Правовое"
        title="Политика обработки персональных данных"
        description={`Редакция от ${PRIVACY_LAST_UPDATED}. Оператор — ${OPERATOR.fullName}.`}
      />

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8">
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
