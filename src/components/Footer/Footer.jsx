import './Footer.css'
import logo from '../../images/Logo.png'

import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer__about'>
          <div>
            <img src={logo} alt='logo image' />
            <p>
              We’re a team of strategic creator and digital innovator, united
              focus in our pursuit of mastery and joyful.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Portofolio</p>
            <p>Portofolio Single</p>
          </div>
          <div>
            <h4>Utility Pages</h4>
            <p>Style Guide</p>
            <p>Instruction</p>
            <p>License</p>
            <p>Changelog</p>
            <p>Password Protected</p>
          </div>
          <div>
            <h4>Subscribe</h4>
            <div className='subscribe-wrapper'>
              <input type='text' placeholder='Enter your email here' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='footer__copyrights'>
          <div>
            <h4>Copyright by</h4>
            <p>Designed by Iconstica.com</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>+0 12 457 4578</p>
          </div>
          <div>
            <h4>Address</h4>
            <p>119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
          <div>
            <span>
              <FiFacebook size={25} color='#0c0c0c' />
            </span>
            <span>
              <FaInstagram size={25} color='#0c0c0c' />
            </span>
            <span>
              <CiLinkedin size={25} color='#0c0c0c' />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
