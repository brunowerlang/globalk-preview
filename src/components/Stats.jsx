import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Configura o observer para verificar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section
      ref={statsRef}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black">
            <AnimatedCounter isVisible={isVisible} targetValue={stat.value} />
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

// Componente para animar o contador
const AnimatedCounter = ({ isVisible, targetValue }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(targetValue.replace(/[^\d]/g, '')) || 0; // Remove caracteres não numéricos

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Duração da animação em milissegundos
      const increment = Math.ceil(endValue / (duration / 50));

      const counter = setInterval(() => {
        setCount((prevCount) => {
          const nextValue = prevCount + increment;
          if (nextValue >= endValue) {
            clearInterval(counter);
            return endValue;
          }
          return nextValue;
        });
      }, 50);

      return () => clearInterval(counter);
    }
  }, [isVisible, endValue]);

  return <>{targetValue.includes('+') ? `${count}+` : count}</>;
};

export default Stats;
