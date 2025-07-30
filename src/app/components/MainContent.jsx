// components/HeroSection.js
import '../styles/MainContent.css';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <div className='main-section-container'>
    <section className="main-section">
      <div>
        <h2 className='bigshot-one-regular title'>"El Malevo"</h2>
        <p className='geist text-p'>Willkommen in der Welt von El Malevo, wo Tradition und Handwerkskunst aufeinandertreffen, um ein unvergleichliches Erlebnis zu schaffen.</p>
        <div className='botones-main'>
          <a className='btn-try-empanadas'>Probieren Sie unsere Empanadas</a>
          <a className='btn-chat-with-us'>Chatten Sie mit uns</a>
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
        <p className='geist text-p text-center ch-100'>-"So wie der argentinische Gaucho nach einem langen Arbeitstag nach Hause kam und von der Wärme einer handgemachten Empanada empfangen wurde, laden wir dich ein, dieses Stück Geschichte zu genießen. Bei El Malevo ist jede Empanada eine Reise durch die Zeit – eine Hommage an das Land, die Menschen und das reiche kulinarische Erbe Argentiniens. Entdecke unsere Geschmacksvielfalt und erlebe die Exzellenz der Einfachheit."</p>
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
