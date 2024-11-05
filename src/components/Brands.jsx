import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-8 flex-col`}>
       <h2 className='font-poppins text-gradient font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center'>Brands </h2>
      
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div 
            key={client.id} 
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] animate-float`} // Adiciona animação flutuante
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
