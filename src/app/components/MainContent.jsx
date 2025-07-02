// components/HeroSection.js
import '../styles/MainContent.css';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <div className='main-section-container'>
    <section className="main-section">
      <div>
        <h2 className='bigshot-one-regular title'>"El Malevo"</h2>
        <p className='geist text-p'>Welcome to El Malevo's world, where tradition and craftsmanship meet to create an experience like no other.</p>
        <div className='botones-main'>
          <a className='btn-try-empanadas'>Try Empanadas</a>
          <a className='btn-chat-with-us'>Chat with us</a>
        </div>
      </div>
      <div className='row-image-hero'>
        <div className='image-isologo'>
            <Image 
                className='img-isologo-malevo'
                alt="Empanada El Malevo"
                src={'/images/isologo-elmalevo.png'}
                layout="fill"
                objectFit="contain"
            />
        </div>
        <p className='geist text-p text-center ch-100'>-"Just as the Argentine gaucho returned home from a long day's work, greeted by the warmth of a handmade empanada, we invite you to savor this piece of history. At "El Malevo," each empanada is a journey through time, a tribute to the land, the people, and the rich culinary heritage of Argentina. Explore our flavors and experience the excellence of simplicity."</p>
      </div>
    </section>
    <section className='cta-main'>
      <div className='row-cta-main'>
              <a href='https://www.instagram.com/empanadaselmalevo/?hl=es-la' className='boton-main-empanada'>
                <Image
                  className="logo-malevo-clothing" 
                  src="/images/empanada-malevo-fotografia.png"
                  alt="Logo Malevo Clothing y ELEFE"
                  layout="fill"
                  objectFit="contain"
                />  
                Foodtruck Alemania
              </a>
              <a href='https://www.instagram.com/empanadaselmalevo/?hl=es-la' className='boton-main-empanada'>
                <Image
                  className="logo-malevo-clothing" 
                  src="/images/empanada-malevo-fotografia.png"
                  alt="Logo Malevo Clothing y ELEFE"
                  layout="fill"
                  objectFit="contain"
                />  
                Local Sevilla
              </a>
              <a href='https://www.instagram.com/malevoclothing/?hl=es-la' className='boton-main-clothing'>
                <Image
                  className="logo-malevo-clothing" 
                  src="/images/malevo-clothing-x-elefe.png"
                  alt="Logo Malevo Clothing y ELEFE"
                  layout="fill"
                  objectFit="contain"
                />
                Explore Malevo Clothing
              </a>
              <a href='https://www.instagram.com/malevoclothing/?hl=es-la' className='boton-main-clothing'>
                <Image
                  className="logo-malevo-clothing" 
                  src="/images/malevo-clothing-x-elefe.png"
                  alt="Logo Malevo Clothing y ELEFE"
                  layout="fill"
                  objectFit="contain"
                />
                La Fabrica 
              </a>
            </div>
    </section>
    </div>
  );
}
