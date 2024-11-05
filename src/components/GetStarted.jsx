import React from 'react';
import styles from '../style';

const GetStarted = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={scrollToContact} // Adicionando o manipulador de clique
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 shadow-lg animate-bubble`}
      style={{
        background: 'radial-gradient(circle, #fddcdc 0%, #f78b8b 50%, #c12323 100%)',
      }}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}
        style={{
          padding: '8px',
          background: 'linear-gradient(to bottom right, #ff7f7f, #ff3d3d)', // Gradiente vermelho mais suave
        }}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-bold text-[22px] leading-[26px] mr-2'>
            <span className='text-white'>Contact</span>
          </p>
        </div>
        <p className='font-poppins font-bold text-[22px] leading-[26px]'>
          <span className='text-white'>Us</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
