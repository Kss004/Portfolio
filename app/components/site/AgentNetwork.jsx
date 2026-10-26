"use client";

import { useEffect, useRef } from "react";

// A small "multi-agent system": nodes drift, link up when close, and pass
// glowing messages along their links. The cursor gently pulls nodes in.
// Click anywhere on it to broadcast a burst of messages.
export default function AgentNetwork({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1, raf = 0, running = true, frame = 0;
    let colors = { fg: "0,0,0", art: "230,90,50" };
    const mouse = { x: -9999, y: -9999 };
    let nodes = [];
    let packets = [];

    // Resolve CSS colors (works for oklch too) into "r,g,b".
    const probe = document.createElement("span");
    probe.style.display = "none";
    document.body.appendChild(probe);
    const px = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
    const rgb = (value) => {
      probe.style.color = value;
      px.clearRect(0, 0, 1, 1);
      px.fillStyle = getComputedStyle(probe).color; // canvas understands oklch
      px.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = px.getImageData(0, 0, 1, 1).data;
      return a ? `${r},${g},${b}` : null;
    };
    const readColors = () => {
      const fg = rgb("var(--foreground)");
      const art = rgb("var(--art)");
      colors = {
        fg: fg ?? (document.documentElement.classList.contains("dark") ? "240,240,240" : "20,20,20"),
        art: art ?? "222,92,52",
      };
    };

    const seed = () => {
      const count = Math.round(Math.min(42, Math.max(16, (w * h) / 6500)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 2 + Math.random() * 2.2,
        glow: 0,
      }));
      packets = [];
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!nodes.length) seed();
    };

    const LINK = 130;
    const neighbours = (i) => {
      const a = nodes[i], out = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const b = nodes[j];
        if ((a.x - b.x) ** 2 + (a.y - b.y) ** 2 < LINK * LINK) out.push(j);
      }
      return out;
    };

    const send = (from) => {
      const ns = neighbours(from);
      if (!ns.length) return;
      packets.push({ from, to: ns[(Math.random() * ns.length) | 0], t: 0, speed: 0.012 + Math.random() * 0.012 });
    };

    const step = () => {
      frame++;
      if (frame % 60 === 0) readColors();

      for (const n of nodes) {
        const dx = mouse.x - n.x, dy = mouse.y - n.y, d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160 && d2 > 1) {
          n.vx += (dx / Math.sqrt(d2)) * 0.012;
          n.vy += (dy / Math.sqrt(d2)) * 0.012;
        }
        n.vx *= 0.985; n.vy *= 0.985;
        n.vx += (Math.random() - 0.5) * 0.01; n.vy += (Math.random() - 0.5) * 0.01;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x)); n.y = Math.max(0, Math.min(h, n.y));
        n.glow *= 0.94;
      }

      if (frame % 28 === 0 && packets.length < 14) send((Math.random() * nodes.length) | 0);

      packets = packets.filter((p) => {
        p.t += p.speed;
        if (p.t >= 1) {
          nodes[p.to].glow = 1;
          if (Math.random() < 0.55) send(p.to); // messages hop onward, like an agent handing off work
          return false;
        }
        return true;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${colors.fg},${0.22 * (1 - d / LINK)})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of packets) {
        const a = nodes[p.from], b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        ctx.strokeStyle = `rgba(${colors.art},0.55)`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(x, y); ctx.stroke();
        ctx.fillStyle = `rgba(${colors.art},1)`;
        ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill();
      }
      for (const n of nodes) {
        if (n.glow > 0.05) {
          ctx.fillStyle = `rgba(${colors.art},${0.18 * n.glow})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 10 * n.glow, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = n.glow > 0.3 ? `rgba(${colors.art},0.95)` : `rgba(${colors.fg},0.7)`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      step(); draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    const onClick = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (x < 0 || y < 0 || x > w || y > h) return;
      let best = 0, bd = Infinity;
      nodes.forEach((n, i) => { const d = (n.x - x) ** 2 + (n.y - y) ** 2; if (d < bd) { bd = d; best = i; } });
      nodes[best].glow = 1;
      for (let k = 0; k < 5; k++) send(best);
      if (reduced) draw();
    };

    readColors();
    resize();
    const ro = new ResizeObserver(() => { resize(); if (reduced) draw(); });
    ro.observe(canvas);
    const themeObs = new MutationObserver(() => { readColors(); if (reduced) draw(); });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("click", onClick);

    let io;
    if (reduced) {
      draw();
    } else {
      io = new IntersectionObserver(([entry]) => {
        const visible = entry.isIntersecting;
        if (visible && !running) { running = true; loop(); }
        if (!visible) { running = false; cancelAnimationFrame(raf); }
      });
      io.observe(canvas);
      loop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect(); themeObs.disconnect(); io?.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("click", onClick);
      probe.remove();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />;
}
