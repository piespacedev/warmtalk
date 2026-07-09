import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-heading text-lg font-bold tracking-tight text-foreground",
        className
      )}
    >
      <span className="relative flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-lavender">
        <span className="size-3 rounded-full bg-white/90" />
      </span>
      WarmTalk
    </Link>
  );
}
