"use client";

import { createElement, useEffect, useRef } from "react";
import type { RevealProps } from "@/types/ui";

export function Reveal({ children, delay, as = "div", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ["reveal", delay ? `reveal-delay-${delay}` : "", className].filter(Boolean).join(" ");
  return createElement(as, { ref, className: cls }, children);
}
