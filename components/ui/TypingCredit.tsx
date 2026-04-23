"use client";

import { useEffect, useState } from "react";

const NORMAL_TEXT = "Designed & developed by ";
const BOLD_TEXT = "TYLOTECH";
const FULL_TEXT = NORMAL_TEXT + BOLD_TEXT;

const TYPE_SPEED = 80;
const ERASE_SPEED = 40;
const DELAY_AFTER_TYPING = 1500;
const DELAY_AFTER_ERASE = 500;

/**
 * Animated credit line — types out "Designed & developed by TYLOTECH",
 * pauses, then erases, on a continuous loop. Links to tylotech.de.
 */
export default function TypingCredit() {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (index < FULL_TEXT.length) {
        timeout = setTimeout(() => setIndex((i) => i + 1), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => setIndex((i) => i - 1), ERASE_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(false), DELAY_AFTER_ERASE);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const current = FULL_TEXT.substring(0, index);
  const normalPart = current.substring(0, Math.min(current.length, NORMAL_TEXT.length));
  const boldPart = current.length > NORMAL_TEXT.length ? current.substring(NORMAL_TEXT.length) : "";

  return (
    <div className="w-full flex items-center justify-center text-center">
      <a
        href="https://tylotech.de"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        <span className="typing-text inline-block min-h-[1em] text-[0.9em] text-white/80 whitespace-nowrap">
          {normalPart}
          {boldPart && <strong className="font-bold text-white">{boldPart}</strong>}
        </span>
      </a>
    </div>
  );
}
