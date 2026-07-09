import { EyeOff, GraduationCap, CalendarX, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";

const ITEMS = [
  { icon: GraduationCap, label: "Психологи с профильным дипломом" },
  { icon: EyeOff, label: "Полная анонимность" },
  { icon: CalendarX, label: "Без записи и ожидания" },
  { icon: Clock, label: "Доступно 24/7" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border/70 bg-secondary/40 py-7">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="size-4 shrink-0 text-primary" />
              <span className="text-[13px] leading-tight font-medium text-foreground/80 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
