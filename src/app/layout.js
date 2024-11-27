import "./styles/globals.css";
import Image from "next/image";
export const metadata = {
  title: "El Malevo",
  description: "Discover El Malevo: Argentine handmade empanadas and gaucho-style clothing. Experience tradition and authenticity in every bite and garment, featuring illustrations inspired by Argentine culture. Empanadas and fashion, all in one place.",
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'body-app'}>
      <Image
        className='elmalevo-ilus-bg' 
        src="/images/bg-ilustracion-el-malevo.png"
        alt='Illustration of El Malevo'
        width={752}
        height={976}
      />
      <Image
        className='cuchillo-ilus-bg' 
        src="/images/cuchillo-ilustracion-el-malevo.png"
        alt='Illustration of El Malevo'
        width={600}
        height={1300}
      />
        {children}
      </body>
    </html>
  );
}
