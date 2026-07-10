"use client";

import { useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ConsentCheckbox({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed",
        inverted ? "text-white/90" : "text-muted-foreground",
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        required
        className="mt-0.5 size-4 shrink-0 cursor-pointer"
        style={{ accentColor: "var(--primary)" }}
      />
      <span>
        Я соглашаюсь на обработку персональных данных в соответствии с{" "}
        <Link
          href="/privacy"
          target="_blank"
          className={cn(
            "font-medium underline underline-offset-2",
            inverted ? "text-white" : "text-foreground"
          )}
        >
          Политикой конфиденциальности
        </Link>
      </span>
    </label>
  );
}
