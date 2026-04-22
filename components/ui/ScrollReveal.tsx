"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "zoom";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Animation delay in ms (useful for staggered reveals inside a row). */
  delay?: number;
  /**
   * Direction from which the content animates into view.
   * - `up`    : slides up from below (default)
   * - `down`  : slides down from above
   * - `left`  : slides in from the left
   * - `right` : slides in from the right
   * - `fade`  : pure fade, no transform
   * - `zoom`  : scales up from 95 %
   */
  direction?: RevealDirection;
  /** Override the default 700ms transition (milliseconds). */
  duration?: number;
  /** When true, re-triggers every time it enters the viewport. Default: once. */
  repeat?: boolean;
}

const hiddenTransform: Record<RevealDirection, string> = {
  up: "translate3d(0, 32px, 0)",
  down: "translate3d(0, -32px, 0)",
  left: "translate3d(-48px, 0, 0)",
  right: "translate3d(48px, 0, 0)",
  fade: "translate3d(0, 0, 0)",
  zoom: "scale3d(0.95, 0.95, 1)",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
  repeat = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) scale3d(1, 1, 1)"
          : hiddenTransform[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
