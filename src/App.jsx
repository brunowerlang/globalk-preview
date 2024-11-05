import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Feedback, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className=' w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
       
          <Stats/> 

          <Clients/>

          <CardDeal/>

          <Business/>
          
          <CTA/>

          <Feedback />

          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App