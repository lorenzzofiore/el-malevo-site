// components/HeroSection.js
"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/HeroSection.css';
import Image from 'next/image';

export default function HeroSection() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const elems = heroRef.current.querySelectorAll(
      '.title, .text-p, .row-image-hero, .image-trama'
    );

    gsap.from(elems, {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <h1 className="bigshot-one-regular title">Once upon a teig...</h1>
      <p className="geist text-p">
        Es geht nicht nur um das Produkt, sondern auch um das Erlebnis - darin
        liegt die Exzellenz.
      </p>
      <div className="row-image-hero">
        <a className="btn-try-empanadas">Jetzt probieren</a>
        <div className="image-empanada-hero">
          <Image
            className="img-empanada-hero"
            alt="Empanada El Malevo"
            src={'/images/imagen-empanada-elmalevo.webp'}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <a className="btn-chat-with-us">Chatten</a>
      </div>
      <div className="image-trama">
        <Image
          className="image-trama-home"
          src="/images/trama.png"
          alt="Trama Guardapampa El Malevo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}
