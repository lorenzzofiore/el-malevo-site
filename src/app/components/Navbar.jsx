// components/Navbar.js
"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/Navbar.css';
import Image from 'next/image';

export default function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const links = nav.querySelectorAll('.navbar-links a');

    // 1) Fade + slide down de todo el navbar
    gsap.from(nav, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // 2) Stagger en los links
    gsap.from(links, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: 0.3,       // arranca después de que baje el navbar
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-logo">
        <Image
          src="/images/logo-elmalevo-white.png"
          alt="El Malevo"
          width={241}
          height={48}
        />
      </div>
      <div className="navbar-links">
        <a href="#empanadas">Empanadas</a>
        <a href="#clothing">Clothing</a>
        <a href="#contact">Contact</a>
        <a href="https://wa.link/qlnfr4" className="btn-chat-with-us-nav">
          Chat with us
        </a>
      </div>
    </nav>
  );
}
