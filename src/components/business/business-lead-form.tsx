"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { reachGoal } from "@/lib/metrika";
import { ConsentCheckbox } from "@/components/shared/consent-checkbox";

export function BusinessLeadForm() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <h3 className="text-xl font-semibold text-foreground">Заявка отправлена</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Свяжемся с вами в течение рабочего дня и подготовим предложение под вашу команду.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        setError(false);
        try {
          const res = await fetch("/api/business", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              company: company.trim(),
              name: name.trim(),
              contact: contact.trim(),
              teamSize: teamSize.trim(),
              message: message.trim(),
            }),
          });
          if (!res.ok) throw new Error("failed");
          reachGoal("b2b_lead_submit");
          setSubmitted(true);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      }}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="b-company">Компания</Label>
          <Input
            id="b-company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Название компании"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="b-name">Контактное лицо</Label>
          <Input
            id="b-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="b-contact">Email или телефон</Label>
          <Input
            id="b-contact"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Как с вами связаться"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="b-team">Размер команды</Label>
          <Input
            id="b-team"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="Например, 50 человек"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="b-message">Комментарий (необязательно)</Label>
        <Textarea
          id="b-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Расскажите о задаче — что важно для вашей команды"
          rows={4}
        />
      </div>
      <ConsentCheckbox />
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-12 rounded-full text-base"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Получить предложение"
        )}
      </Button>
      {error && (
        <p className="text-sm text-destructive">
          Не получилось отправить. Попробуйте ещё раз.
        </p>
      )}
    </form>
  );
}
