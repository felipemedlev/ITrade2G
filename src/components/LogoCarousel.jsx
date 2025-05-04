'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './LogoCarousel.module.css';

export default function LogoCarousel() {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const companyLogos = [
    { name: 'DeMaria', src: '/companies/demaria.png' },
    { name: 'Excel', src: '/companies/Logoexcel.png' },
    { name: 'Midnight Moon', src: '/companies/midnightmoon.png' },
    { name: 'Nova Foods', src: '/companies/novafoods.png' },
    { name: 'Nutrisnacks', src: '/companies/nutrisnacks.png' },
    { name: 'Torre', src: '/companies/torre.png' },
  ];

  // Create duplicate array for infinite effect
  const allLogos = [...companyLogos, ...companyLogos];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className={`${styles.carouselContainer} py-4`}>
      <div className="container">
        <h3 className="text-center mb-4 fw-semibold">Nuestros clientes</h3>
        <div className={styles.carouselWrapper}>
          <div
            className={`${styles.carousel} ${isPaused ? styles.paused : ''}`}
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {allLogos.map((logo, index) => (
              <div className={styles.carouselItem} key={index}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={150}
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}