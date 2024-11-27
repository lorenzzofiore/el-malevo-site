// components/Navbar.js
import '../styles/Navbar.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/images/logo-elmalevo-white.png" alt="El Malevo" width={241} height={48} />
      </div>
      <div className="navbar-links">
        <a href="#empanadas">Empanadas</a>
        <a href="#events">Events</a>
        <a href="#clothing">Clothing</a>
        <a href="#contact">Contact</a>
        <button className="btn-chat-with-us-nav">Chat with us</button>
      </div>
    </nav>
  );
}
