import './Team.css'
import team01 from '../../images/team01.png'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'

export default function Team() {
  return (
    <section className='team'>
      <div className='container'>
        <h3>Our Team</h3>
        <div className='team__cards'>
          <div className='team__card'>
            <img src={team01} alt='person image' />
            <h4>Cameron Williamson</h4>
            <p>Marketing Head</p>
            <div className='team__card-socials'>
              <span>
                <FiFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <CiLinkedin />
              </span>
            </div>
          </div>
          <div className='team__card'>
            <img src={team01} alt='person image' />
            <h4>Cameron Williamson</h4>
            <p>Marketing Head</p>
            <div className='team__card-socials'>
              <span>
                <FiFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <CiLinkedin />
              </span>
            </div>
          </div>
          <div className='team__card'>
            <img src={team01} alt='person image' />
            <h4>Cameron Williamson</h4>
            <p>Marketing Head</p>
            <div className='team__card-socials'>
              <span>
                <FiFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <CiLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
