"use client";

import React, { useEffect } from "react";
import anime from "animejs";

export const HeroTitle = () => {
  useEffect(() => {
    // Animate title characters with a cascade effect
    anime({
      targets: ".hero-title span",
      translateY: [50, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: anime.stagger(80, { start: 200 }),
    });
  }, []);

  const title = "amandarina.cl";

  return (
    <h1 className="hero-title">
      {title.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {char}
        </span>
      ))}
    </h1>
  );
};