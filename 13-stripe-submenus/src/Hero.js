import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments Infrastructure for the internet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptate consectetur unde ea quibusdam doloribus atque consequuntur, debitis quam eligendi, sed non tenetur, quos at possimus. Et quaerat adipisci eum.</p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'></img>
        </article>
      </div>
    </section>
  )
}

export default Hero
