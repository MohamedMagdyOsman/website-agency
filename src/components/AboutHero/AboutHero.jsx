import './AboutHero.css'
import { FaStar } from 'react-icons/fa'
import person from '../../images/person.png'
import image from '../../images/about-hero-img.png'

export default function AboutHero() {
  return (
    <div className='container'>
      <div className='about-hero'>
        <div className='about-hero-left'>
          <div>Pleasure and so read the was hope.</div>
          <h1>
            Ready to take <span>your business</span> to the next level?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <div className='rate'>
            <img src={person} alt='pesona image' />
            <div>
              <div className='rate-text'>Rated 4.9/5 stars</div>
              <div className='stars'>
                <FaStar size={17} color='#FBFBFB' />
                <FaStar size={17} color='#FBFBFB' />
                <FaStar size={17} color='#FBFBFB' />
                <FaStar size={17} color='#FBFBFB' />
                <FaStar size={17} color='#FBFBFB' />
              </div>
            </div>
          </div>
        </div>
        <div className='about-hero-right'>
          <img src={image} alt='people inside a company' />
        </div>
      </div>
    </div>
  )
}
