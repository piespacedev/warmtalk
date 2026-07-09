import { CalendarClock, CreditCard } from "lucide-react";

export function SubscriptionCard({
  plan,
  renewsOn,
  callsUsedThisMonth,
}: {
  plan: string;
  renewsOn: string;
  callsUsedThisMonth: number;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Подписка</span>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
          <span className="size-1.5 rounded-full bg-success" />
          Активна
        </span>
      </div>

      <p className="mt-3 text-lg font-semibold text-foreground">{plan}</p>

      <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CreditCard className="size-4" />
          Звонков в этом месяце: {callsUsedThisMonth}
        </div>
        <div className="flex items-center gap-2">
          <CalendarClock className="size-4" />
          Продление {renewsOn}
        </div>
      </div>
    </div>
  );
}
