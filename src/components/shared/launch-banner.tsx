"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function LaunchBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-10 py-2.5 text-center text-[13px] font-medium sm:text-sm">
        <span>
          «WarmTalk» ещё не запущен — сейчас перед вами демо-версия.{" "}
          <Link href="/#waitlist" className="underline underline-offset-2 hover:no-underline">
            Оставьте контакт, и мы сообщим о запуске первыми
          </Link>
        </span>
        <button
          onClick={() => setVisible(false)}
          aria-label="Закрыть"
          className="absolute right-3 flex size-6 shrink-0 items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
