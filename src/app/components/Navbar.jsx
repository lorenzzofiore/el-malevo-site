// components/Navbar.js
import '../styles/Navbar.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/images/logo-elmalevo-white.png" alt="El Malevo" width={241} height={48} />
      </div>
      <div className="navbar-links">
        <a href="#empanadas">Empanadas</a>
        <a href="#clothing">Clothing</a>
        <a href="#contact">Contact</a>
        <a href="https://wa.link/qlnfr4" className="btn-chat-with-us-nav">Chat with us</a>
      </div>
    </nav>
  );
}
