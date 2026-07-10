"use client";

import Script from "next/script";

// ID виджета JivoChat — часть ссылки после /widget/
const JIVO_WIDGET_ID = "L4UvrR2AVa";

export function JivoChat() {
  return (
    <Script
      id="jivochat"
      src={`https://code.jivo.ru/widget/${JIVO_WIDGET_ID}`}
      strategy="afterInteractive"
    />
  );
}
