import './AboutUs.css'
import aboutImage from '../../images/about-section.png'
import { FreeTrial } from '../index'

export default function AboutUs() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='left'>
          <img src={aboutImage} alt='persons in a company' />
        </div>
        <div className='right'>
          <div>About us</div>
          <h3>The core mission behind all our work</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <div className='about__stats'>
            <div>
              <p>330 +</p>
              <p>Companies helped</p>
            </div>
            <div>
              <p>230 +</p>
              <p>Revenue generated</p>
            </div>
          </div>
          <FreeTrial />
        </div>
      </div>
    </section>
  )
}
