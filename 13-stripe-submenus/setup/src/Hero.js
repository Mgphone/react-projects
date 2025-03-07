import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSub}=useGlobalContext();
  
  return (
    <section className='hero' onMouseOver={closeSub}>
    <div className='hero-center'>
    <article className='hero-info'>
      <h1>Financial infrastructure for the internet</h1>
      <p>Millions of businesses of all sizes – from startups to large enterprises – use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
      <button className='btn'>
        Start
      </button>
      
      </article>
    <article className='hero-images'>
<img src={phoneImg} alt="PhoneImg" />
    </article>  
    </div>
  
  
  </section>)
}

export default Hero
