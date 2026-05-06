"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  text?: string;
  phrases?: string[];
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  holdMs?: number;
};

type Phase = "typing" | "holding" | "deleting";

export default function TypewriterText({
  text,
  phrases,
  typeSpeedMs = 56,
  deleteSpeedMs = 38,
  holdMs = 2250,
}: TypewriterTextProps) {
  const phraseList = useMemo(
    () => (phrases && phrases.length > 0 ? phrases : text ? [text] : [""]),
    [phrases, text],
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const currentPhrase = phraseList[phraseIndex] ?? "";
  const typed = useMemo(
    () => currentPhrase.slice(0, charIndex),
    [currentPhrase, charIndex],
  );

  useEffect(() => {
    setPhraseIndex(0);
    setCharIndex(0);
    setPhase("typing");
  }, [phraseList]);

  useEffect(() => {
    let delay = typeSpeedMs;

    if (phase === "typing") {
      if (charIndex < currentPhrase.length) {
        delay = typeSpeedMs;
      } else {
        delay = holdMs;
      }
    } else if (phase === "holding") {
      delay = holdMs;
    } else {
      delay = deleteSpeedMs;
    }

    const id = window.setTimeout(() => {
      if (phase === "typing") {
        if (charIndex < currentPhrase.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setPhase("holding");
        }
        return;
      }

      if (phase === "holding") {
        setPhase("deleting");
        return;
      }

      if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phraseList.length);
        setPhase("typing");
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [
    phase,
    charIndex,
    currentPhrase.length,
    phraseList.length,
    typeSpeedMs,
    deleteSpeedMs,
    holdMs,
  ]);

  return (
    <span className="inline-flex items-center whitespace-nowrap">
      <span>{typed}</span>
      <span className="typewriter-cursor" aria-hidden>
        |
      </span>
    </span>
  );
}
