import Footer from './components/Footer.jsx';
import ClothesSection from './components/ClothesSection.jsx';
import EmpanadasSection from './components/EmpanadasSection.jsx';
import HeroSection from './components/HeroSection.jsx';
import MainContent from './components/MainContent.jsx';
import Navbar from './components/Navbar.jsx'
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container-app'>
      <div>
        <Navbar/> 
      </div>
      <div className='main'>
        <HeroSection />
        <MainContent/>
        <EmpanadasSection/>
        <ClothesSection/>
        <Footer/>
      </div>
    </div>
  );
}
