import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const contact = typeof body?.contact === "string" ? body.contact.trim() : "";

  if (!contact) {
    return NextResponse.json({ error: "contact is required" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
  }

  const text = [
    "🎉 Новая заявка на лист ожидания «WarmTalk»",
    "",
    `Контакт: ${contact}`,
    `Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
  ].join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  if (!telegramResponse.ok) {
    const details = await telegramResponse.text();
    console.error("Telegram send failed:", details);
    return NextResponse.json({ error: "failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
