"use client";

import { useState, useEffect } from 'react';
import '../styles/ClothesSection.css';
import Image from 'next/image';

export default function ClothesSection() {
  const [clothes, setClothes] = useState([]);
  const [selectedClothesIndex, setSelectedClothesIndex] = useState(0);

  useEffect(() => {
    fetch('/data/clothes.json')
      .then((response) => response.json())
      .then((data) => {
        setClothes(data);
      })
      .catch((error) => console.error('Error loading Clothes:', error));
  }, []);

  const handlePrevious = () => {
    setSelectedClothesIndex((prevIndex) =>
      prevIndex === 0 ? clothes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedClothesIndex((prevIndex) =>
      prevIndex === clothes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedClothes = clothes[selectedClothesIndex];

  return (
    <section className="clothes-section" id="clothing">
      <div className="image-trama">
        <Image
          className="image-trama-home" 
          src="/images/trama.png"
          alt="Trama Guardapampa El Malevo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {clothes.map((clothes, index) => (
        <div
          key={clothes.id}
          className={`clothes-item ${index === selectedClothesIndex ? 'active' : ''}`}
          onClick={() => setSelectedClothesIndex(index)}
        >
          <Image
            src={clothes.image}
            alt={clothes.name}
            width={200} 
            height={100}
          />
          <h3>{clothes.name}</h3>
          <p>{clothes.description}</p>
        </div>
      ))}
      {selectedClothes && (
        <div className="selected-clothes">
          <div className="info-clothes">
            <span className="label-title">Malevo Clothing</span>
            <h2 className="bigshot-one-regular">{selectedClothes.name}</h2>
            <p className='geist'>{selectedClothes.description}</p>
            <a href="https://www.instagram.com/malevoclothing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="btn-try-clothes">Buy Clothes</a>
            <div className="botones-clothes">
              <button onClick={handlePrevious}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
              </button>
              <button onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="image-clothes">
            <img src={selectedClothes.image} alt={selectedClothes.name} />
          </div>
        </div>
      )}
    </section>
  );
}
