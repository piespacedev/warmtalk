export type Psychologist = {
  initials: string;
  name: string;
  specialization: string;
  gradient: string;
};

export const PSYCHOLOGISTS: Psychologist[] = [
  { initials: "АС", name: "Анна Смирнова", specialization: "Тревога и стресс", gradient: "from-lavender to-[#9B90FF]" },
  { initials: "ИК", name: "Игорь Кузнецов", specialization: "Выгорание", gradient: "from-primary to-[#FF8A6B]" },
  { initials: "ЕВ", name: "Елена Волкова", specialization: "Отношения", gradient: "from-success to-[#66D3A6]" },
  { initials: "ДП", name: "Дмитрий Петров", specialization: "Панические атаки", gradient: "from-[#F2B84B] to-[#FFD37A]" },
];

export type SessionRecord = {
  id: string;
  psychologistName: string;
  date: string;
  duration: string;
  rating: number;
};

export const INITIAL_HISTORY: SessionRecord[] = [
  { id: "h1", psychologistName: "Елена Волкова", date: "3 июля, 23:14", duration: "8 мин", rating: 5 },
  { id: "h2", psychologistName: "Анна Смирнова", date: "28 июня, 09:02", duration: "12 мин", rating: 5 },
  { id: "h3", psychologistName: "Дмитрий Петров", date: "21 июня, 19:47", duration: "6 мин", rating: 4 },
];

export const SUBSCRIPTION = {
  plan: "Без ограничений",
  renewsOn: "9 августа",
  callsUsedThisMonth: 6,
};
