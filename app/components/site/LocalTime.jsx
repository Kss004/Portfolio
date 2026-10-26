"use client";

import { useEffect, useState } from "react";

// Shows the current time in New Delhi, so visitors know when to expect a reply.
export default function LocalTime() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>New Delhi · {now ?? "--:--"} IST</span>;
}
