export const METRIKA_COUNTER_ID = 110569021;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export function reachGoal(goal: string) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(METRIKA_COUNTER_ID, "reachGoal", goal);
  }
}
