"use client";

import { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1600&q=80",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer.current);
  }, []);

  function shift(dir) {
    setIndex((i) => (i + dir + HERO_IMAGES.length) % HERO_IMAGES.length);
  }

  return (
    <section className="hero" id="hero">
      <div
        className="hero-slide"
        style={{ backgroundImage: `url('${HERO_IMAGES[index]}')` }}
      ></div>
      <div className="hero-content">
        <h1>METRO DETROIT PREMIER ARCHITECTURE FIRM</h1>
        <p>
          Since 1998 GAV &amp; Associates has created exciting, functional, efficient
          building designs for the good of the client and society as a whole.
        </p>
        <a href="#projects" className="btn">
          Our Portfolio
        </a>
      </div>
      <button className="hero-arrow prev" onClick={() => shift(-1)}>
        &#10094;
      </button>
      <button className="hero-arrow next" onClick={() => shift(1)}>
        &#10095;
      </button>
    </section>
  );
}
