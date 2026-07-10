"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { reachGoal } from "@/lib/metrika";
import { ConsentCheckbox } from "@/components/shared/consent-checkbox";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <h3 className="text-xl font-semibold text-foreground">Сообщение отправлено</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Обычно отвечаем в течение одного рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        reachGoal("contact_form_submit");
        setSubmitted(true);
      }}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="c-name">Имя</Label>
          <Input id="c-name" required placeholder="Как к вам обращаться" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" type="email" required placeholder="name@mail.ru" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="c-message">Сообщение</Label>
        <Textarea id="c-message" required placeholder="Расскажите, чем можем помочь" rows={5} />
      </div>
      <ConsentCheckbox />
      <Button type="submit" size="lg" className="h-12 rounded-full text-base">
        Отправить
      </Button>
    </form>
  );
}
