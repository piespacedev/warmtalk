import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const company = typeof body?.company === "string" ? body.company.trim() : "";
  const contact = typeof body?.contact === "string" ? body.contact.trim() : "";
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const teamSize = typeof body?.teamSize === "string" ? body.teamSize.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!company || !contact) {
    return NextResponse.json(
      { error: "company and contact are required" },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
  }

  const lines = [
    "🏢 [B2B] Новая заявка от компании — WarmTalk",
    "",
    `Компания: ${company}`,
    `Контактное лицо: ${name || "—"}`,
    `Контакт: ${contact}`,
    `Размер команды: ${teamSize || "—"}`,
  ];
  if (message) {
    lines.push(`Комментарий: ${message}`);
  }
  lines.push(
    `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`
  );

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    }
  );

  if (!telegramResponse.ok) {
    const details = await telegramResponse.text();
    console.error("Telegram send failed:", details);
    return NextResponse.json({ error: "failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
