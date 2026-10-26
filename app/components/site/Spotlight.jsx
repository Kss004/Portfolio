"use client";

import { useEffect, useRef } from "react";

// Cursor spotlight, ported from Harbor: a blurred glow that trails the pointer on an
// overdamped spring (glides in, never bounces). Off for touch and reduced motion,
// and the animation loop stops once it settles.
const SIZE = 700;
const K = 80; // stiffness
const C = 22; // damping
const M = 0.6; // mass

export default function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    if (matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const p = { x: innerWidth * 0.7, y: 220 }; // position
    const v = { x: 0, y: 0 }; // velocity
    const t = { ...p }; // target (the pointer)
    let raf = 0;
    let last = 0;

    const place = () => (el.style.transform = `translate3d(${p.x - SIZE / 2}px, ${p.y - SIZE / 2}px, 0)`);
    const step = (now) => {
      const dt = Math.min((now - (last || now)) / 1000, 1 / 30); // clamp after a hidden tab
      last = now;
      for (const k of ["x", "y"]) {
        v[k] += ((-K * (p[k] - t[k]) - C * v[k]) / M) * dt;
        p[k] += v[k] * dt;
      }
      place();
      const settled = Math.abs(p.x - t.x) + Math.abs(p.y - t.y) < 0.5 && Math.abs(v.x) + Math.abs(v.y) < 0.5;
      raf = settled ? 0 : requestAnimationFrame(step);
      if (settled) last = 0;
    };
    const move = (e) => {
      t.x = e.clientX;
      t.y = e.clientY;
      if (!raf) raf = requestAnimationFrame(step);
    };

    place();
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
