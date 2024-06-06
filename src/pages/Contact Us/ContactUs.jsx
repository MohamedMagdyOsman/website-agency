import './ContactUs.css'
import { Navbar, Footer } from '../../components'

import { FaInstagram } from 'react-icons/fa'
import { FiPhone, FiFacebook } from 'react-icons/fi'
import { CiMail, CiLocationOn, CiLinkedin } from 'react-icons/ci'

export default function ContactUs() {
  return (
    <>
      <Navbar variant={'light'} />
      <section className='contact-us'>
        <div className='container'>
          <div className='left'>
            <h2>Let’s talk</h2>
            <p>
              We collaborate with thousands of creators, entrepreneurs and
              complete legends.
            </p>
            <hr />
            <div>
              <div className='contact-method'>
                <span>
                  <CiMail color='#FBFBFB' size={20} />
                </span>
                <div>
                  <h5>Our email</h5>
                  <p>hello@example.com</p>
                </div>
              </div>
              <div className='contact-method'>
                <span>
                  <FiPhone color='#FBFBFB' size={20} />
                </span>
                <div>
                  <h5>Call us</h5>
                  <p>+123 456 7892</p>
                </div>
              </div>
              <div className='contact-method'>
                <span>
                  <CiLocationOn color='#FBFBFB' size={20} />
                </span>
                <div>
                  <h5>Find us</h5>
                  <p>Open Google Maps</p>
                </div>
              </div>
            </div>
            <hr />
            <div className='social'>
              <FiFacebook size={20} />
              <FaInstagram size={20} />
              <CiLinkedin size={20} />
            </div>
          </div>
          <div className='right'>
            <form action='' method=''>
              <div className='input-field'>
                <label htmlFor='fname'>First Name</label>
                <input type='text' id='fname' />
              </div>
              <div className='input-field'>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' id='lname' />
              </div>
              <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className='input-field'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' />
              </div>
              <div className='input-field textarea-wrap'>
                <label htmlFor='message'>Phone</label>
                <textarea id='message' />
              </div>
              <button type='submit'>Submit Now</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
