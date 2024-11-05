import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Us <br className='sm:block hidden'/>Company vision</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We turn projects into reality<br className='sm:block hidden'/>
        Developing products, bringing them to the real world and making everyone fall in love with them is our reason for existing.
        </p>
        <Button styles='mt-10 text-gradient' text='Learn More'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
