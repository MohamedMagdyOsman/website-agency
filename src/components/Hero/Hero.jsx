import './Hero.css'
import { FreeTrial } from '../index.js'

import heroStars from '../../images/hero-stars.png'
import heroImage from '../../images/hero-image.png'
import heroBrands from '../../images/brands.png'

export default function Hero() {
  return (
    <section className='hero'>
      <img src={heroStars} alt='stars' className='hero__stars' />
      <div className='container'>
        <div className='hero__left'>
          <h2>
            Ready to take your <span>Business Growth</span> to the next level?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <FreeTrial />

          <div className='hero__brands'>
            <div className='hero__brands-title'>Trusted by Leading Brands</div>
            <div className='hero__brands-wrapper'>
              <img src={heroBrands} alt='some companies logos' />
            </div>
          </div>
        </div>
        <div className='hero__right'>
          <img src={heroImage} alt='people in a company' />
        </div>
      </div>
    </section>
  )
}
