"use client";

import { useState, useEffect } from 'react';
import '../styles/EmpanadasSection.css';
import Image from 'next/image';

export default function EmpanadasSection() {
  const [empanadas, setEmpanadas] = useState([]);
  const [selectedEmpanadaIndex, setSelectedEmpanadaIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    fetch('/data/empanadas.json')
      .then((response) => response.json())
      .then((data) => {
        setEmpanadas(data);
      })
      .catch((error) => console.error('Error loading empanadas:', error));
  }, []);
// Función genérica para cambiar imagen con fade
  const changeIndex = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setIsFading(false);
    }, 500); // coincide con la duración del transition en CSS
  };

  const handlePrevious = () => {
    setSelectedEmpanadaIndex((prevIndex) =>
      prevIndex === 0 ? empanadas.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedEmpanadaIndex((prevIndex) =>
      prevIndex === empanadas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedEmpanada = empanadas[selectedEmpanadaIndex];

  return (
    <section className="empanadas-section" id="empanadas">
      <div className="image-trama">
        <Image
          className="image-trama-home" 
          src="/images/trama.png"
          alt="Trama Guardapampa El Malevo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {empanadas.map((empanada, index) => (
        <div
          key={empanada.id}
          className={`empanada-item ${index === selectedEmpanadaIndex ? 'active' : ''}`}
          onClick={() => setSelectedEmpanadaIndex(index)}
        >
          <Image
            src={empanada.image}
            alt={empanada.name}
            width={200} 
            height={100}
          />
          <h3>{empanada.name}</h3>
          <p>{empanada.description}</p>
        </div>
      ))}
      {selectedEmpanada && (
        <div className="selected-empanada">
          <div className="info-empanada">
            <h2 className="bigshot-one-regular">{selectedEmpanada.name}</h2>
            <p className='geist'>{selectedEmpanada.description}</p>
            <a href="#" className="btn-try-empanadas">View All</a>
            <div className="botones-empanadas">
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
          <div className="image-empanada">
             <img src={selectedEmpanada.image} alt={selectedEmpanada.name} />
          </div>
        </div>
      )}
    </section>
  );
}
