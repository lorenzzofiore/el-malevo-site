import '../styles/Footer.css';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="footer-section" id="contact">
      <h2 className='bigshot-one-regular title text-center'>Ready to experience the essence of "El Malevo"?</h2>
      <p className='geist text-p'>Welcome to the world of "El Malevo," where tradition and craftsmanship meet to create an experience like no other.</p>
      <div className='row-cta-footer'>
        <a href='https://www.instagram.com/empanadaselmalevo/?hl=es-la' className='boton-footer-empanada'>
          <Image
            className="logo-malevo-clothing" 
            src="/images/empanada-malevo-fotografia.png"
            alt="Logo Malevo Clothing y ELEFE"
            layout="fill"
            objectFit="contain"
          />  
          Shop Empanadas
        </a>
        <a href='https://www.instagram.com/malevoclothing/?hl=es-la' className='boton-footer-clothing'>
          <Image
            className="logo-malevo-clothing" 
            src="/images/malevo-clothing-x-elefe.png"
            alt="Logo Malevo Clothing y ELEFE"
            layout="fill"
            objectFit="contain"
          />
          Explore Malevo Clothing
        </a>
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
      <div className='footer-legales'>
        <p className='geist'>
          Kempgensweg 68, Düsseldorf, Germany 40231
        </p>
        <p className='geist'>
          Empanadas El Malevo - All rights reserved © - 2024
        </p>
        <div className='cta-clothing geist'>
          <a href="https://www.instagram.com/malevoclothing/?hl=es-la">Malevo Clothing</a> x <a href="https://lorenzofiore.me/">ELEFE©</a>
        </div>
      </div>
    </section>
  );
}
