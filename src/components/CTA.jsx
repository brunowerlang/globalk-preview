import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>May we help you?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to clarify your questions and support your journey.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      <Button styles='mt-10 text-gradient' text='Contact Us'/>
      </div>
    </section>
  )
}

export default CTA
