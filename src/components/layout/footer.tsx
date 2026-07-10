import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";

const COLUMNS = [
  {
    title: "Продукт",
    links: [
      { href: "/how-it-works", label: "Как это работает" },
      { href: "/app", label: "Личный кабинет" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Компания",
    links: [
      { href: "/about", label: "О сервисе" },
      { href: "/business", label: "Для бизнеса" },
      { href: "/for-psychologists", label: "Для психологов" },
      { href: "/contacts", label: "Контакты" },
    ],
  },
  {
    title: "Правовое",
    links: [
      { href: "#", label: "Политика конфиденциальности" },
      { href: "#", label: "Договор оферты" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Психолог рядом, когда он действительно нужен. Мгновенная
              поддержка по подписке — 5–15 минут, без записи и ожидания.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-foreground">{col.title}</div>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-border bg-background px-5 py-4">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            «WarmTalk» не оказывает экстренную психиатрическую помощь и не
            заменяет вызов скорой. Если есть угроза жизни — звоните 112 или в
            службу экстренной психологической помощи 8&nbsp;800&nbsp;2000&nbsp;122.
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} WarmTalk. MVP-версия продукта.</span>
          <span>Сделано с заботой в России</span>
        </div>
      </Container>
    </footer>
  );
}
