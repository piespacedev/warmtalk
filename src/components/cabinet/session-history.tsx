import { Star } from "lucide-react";
import type { SessionRecord } from "@/lib/cabinet-data";

export function SessionHistory({ records }: { records: SessionRecord[] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <span className="text-sm font-semibold text-foreground">История звонков</span>

      <ul className="mt-4 flex flex-col gap-1">
        {records.map((r) => (
          <li
            key={r.id}
            className="flex items-center justify-between gap-3 border-b border-border py-3 text-sm last:border-0 last:pb-0"
          >
            <div>
              <p className="font-medium text-foreground">{r.psychologistName}</p>
              <p className="text-xs text-muted-foreground">
                {r.date} · {r.duration}
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${
                    i < r.rating ? "fill-primary text-primary" : "text-border"
                  }`}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
