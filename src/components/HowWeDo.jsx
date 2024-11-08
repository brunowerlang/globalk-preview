import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimblack text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={`${layout.section} relative`} id='howwedo'>
      <div className={layout.sectionInfo} >
        <h2 className={`${styles.heading2} text-black`}>
          How We Do <br className='sm:block hidden' />
        </h2>

        <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>

        <p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
          We ensure seamless solutions for your brand.
        </p>
        <Button styles='mt-10' text='Get Started' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
