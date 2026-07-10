"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { reachGoal } from "@/lib/metrika";

const NAV_LINKS = [
  { href: "/about", label: "О сервисе" },
  { href: "/how-it-works", label: "Как это работает" },
  { href: "/business", label: "Для бизнеса" },
  { href: "/for-psychologists", label: "Для психологов" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button
            variant="ghost"
            size="lg"
            className="h-11 rounded-full px-5"
            render={<Link href="/contacts" />}
          >
            Контакты
          </Button>
          <Button
            size="lg"
            className="h-11 rounded-full px-6 text-[15px] shadow-sm shadow-primary/25"
            render={<Link href="/app" />}
            onClick={() => reachGoal("header_cta_click")}
          >
            Попробовать
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon-lg" className="rounded-full xl:hidden" />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Меню</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacts"
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Контакты
              </Link>
            </nav>
            <div className="mt-auto p-4">
              <Button
                size="lg"
                className="h-12 w-full rounded-full text-base"
                render={<Link href="/app" />}
                onClick={() => reachGoal("header_cta_click")}
              >
                Попробовать
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
