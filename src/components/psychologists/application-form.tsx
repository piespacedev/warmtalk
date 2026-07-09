"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <h3 className="text-xl font-semibold text-foreground">Заявка отправлена</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Мы свяжемся с вами в течение 2 рабочих дней и расскажем о следующих шагах.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Имя</Label>
          <Input id="name" required placeholder="Как к вам обращаться" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact">Телефон или email</Label>
          <Input id="contact" required placeholder="+7 или name@mail.ru" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="specialization">Специализация</Label>
          <Input id="specialization" required placeholder="Например, тревожные расстройства" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="experience">Опыт консультирования</Label>
          <Input id="experience" required placeholder="Например, 4 года" />
        </div>
      </div>
      <Button type="submit" size="lg" className="h-12 rounded-full text-base">
        Отправить заявку
      </Button>
      <p className="text-xs text-muted-foreground">
        Отправляя заявку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
