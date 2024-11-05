import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}
      style={{
        background: 'radial-gradient(circle, #fddcdc 0%, #f78b8b 50%, #c12323 100%)',
      }}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-white`}
        style={{
          padding: '8px',
          background: 'white', // Cor de fundo para o botão central
        }}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Contact</span>
          </p>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Us</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
