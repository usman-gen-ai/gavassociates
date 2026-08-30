"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function LogoMark() {
  return (
    <svg viewBox="0 0 60 54" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,2 58,50 40,50 30,32 20,50 2,50" fill="#2f7fd1" />
      <polygon points="30,20 44,50 34,50 30,42 26,50 16,50" fill="#111827" />
    </svg>
  );
}

export default function Header({ active = "home", forceSolid = false }) {
  const [solid, setSolid] = useState(forceSolid);

  useEffect(() => {
    if (forceSolid) return;
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid]);

  return (
    <header
      className={`site-header${solid ? " solid" : ""}`}
      style={forceSolid ? { position: "sticky" } : undefined}
    >
      <div className="container nav-wrap">
        <Link href="/" className="logo">
          <LogoMark />
          <div className="logo-text">
            <b>
              GAV <span style={{ color: "#2f7fd1" }}>&amp;</span> ASSOCIATES, INC.
            </b>
            <small>ARCHITECTURE &middot; DESIGN &middot; PLANNING</small>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/" className={active === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={active === "about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="dropdown">
              <Link href="/#projects">Portfolio &#9662;</Link>
              <div className="dropdown-menu">
                <Link href="/#projects">Assembly</Link>
                <Link href="/#projects">Commercial</Link>
                <Link href="/#projects">Education</Link>
                <Link href="/#projects">Industrial</Link>
                <Link href="/#projects">Multi-Family</Link>
                <Link href="/#projects">Custom Residential</Link>
              </div>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
