// components/HeroSection.js
import '../styles/MainContent.css';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="main-section">
      <h2 className='bigshot-one-regular title'>"El Malevo"</h2>
      <p className='geist text-p'>Welcome to El Malevo's world, where tradition and craftsmanship meet to create an experience like no other.</p>
      <div className='row-image-hero'>
        <a className='btn-try-empanadas'>Try Empanadas</a>
        <div className='image-isologo'>
            <Image 
                className='img-isologo-malevo'
                alt="Empanada El Malevo"
                src={'/images/isologo-elmalevo.png'}
                layout="fill"
                objectFit="contain"
            />
        </div>
        <a className='btn-chat-with-us'>Chat with us</a>
      </div>
      <p className='geist text-p text-center ch-100'>Just as the Argentine gaucho returned home from a long day's work, greeted by the warmth of a handmade empanada, we invite you to savor this piece of history. At "El Malevo," each empanada is a journey through time, a tribute to the land, the people, and the rich culinary heritage of Argentina. Explore our flavors and experience the excellence of simplicity.</p>
    </section>
  );
}
