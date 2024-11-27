// components/HeroSection.js
import '../styles/HeroSection.css';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className='bigshot-one-regular title'>Once upon a teig...</h1>
      <p className='geist text-p'>Es geht nicht nur um das Produkt, sondern auch um das Erlebnis - darin liegt die Exzellenz.</p>
      <div className='row-image-hero'>
        <a className='btn-try-empanadas'>Try Empanadas</a>
        <div className='image-empanada-hero'>
            <Image 
                className='img-empanada-hero'
                alt="Empanada El Malevo"
                src={'/images/imagen-empanada-elmalevo.webp'}
                layout="fill"
                objectFit="contain"
            />
        </div>
        <a className='btn-chat-with-us'>Chat with us</a>
      </div>
      <div className='image-trama'>
        <Image
          className='image-trama-home' 
          src="/images/trama.png"
          alt='Trama Guardapampa El Malevo'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </section>
  );
}
