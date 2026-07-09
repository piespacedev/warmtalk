"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function WaitlistForm({
  compact = false,
  inverted = false,
  className,
}: {
  compact?: boolean;
  inverted?: boolean;
  className?: string;
}) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2.5",
          inverted ? "text-white" : "text-success",
          compact ? "text-sm" : "text-base",
          className
        )}
      >
        <CheckCircle2 className={compact ? "size-4" : "size-5"} />
        Готово! Мы напишем вам, как только откроем доступ.
      </div>
    );
  }

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!value.trim() || loading) return;
          setLoading(true);
          setError(false);
          try {
            const res = await fetch("/api/waitlist", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ contact: value.trim() }),
            });
            if (!res.ok) throw new Error("failed");
            setSubmitted(true);
          } catch {
            setError(true);
          } finally {
            setLoading(false);
          }
        }}
        className={cn("flex w-full flex-col gap-2.5 sm:flex-row", compact && "sm:gap-2")}
      >
        <Input
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Email или телефон"
          className={cn(
            "rounded-full",
            inverted
              ? "border-transparent bg-white/95 text-foreground placeholder:text-muted-foreground"
              : "border-border bg-background",
            compact ? "h-10 px-4" : "h-14 px-6 text-base"
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className={cn(
            "shrink-0 rounded-full",
            inverted && "bg-white text-primary hover:bg-white/90",
            compact ? "h-10 px-5 text-sm" : "h-14 px-7 text-base shadow-lg shadow-primary/25"
          )}
        >
          {loading ? (
            <Loader2 className={cn("animate-spin", compact ? "size-3.5" : "size-4")} />
          ) : (
            <>
              Сообщить о запуске
              <ArrowRight className={compact ? "size-3.5" : "size-4"} />
            </>
          )}
        </Button>
      </form>
      {error && (
        <p className={cn(inverted ? "text-white/90" : "text-destructive", "text-sm")}>
          Не получилось отправить. Попробуйте ещё раз.
        </p>
      )}
    </div>
  );
}
