/* eslint-disable react/prop-types */

import { useRef } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import { IoIosMenu, IoIosClose } from 'react-icons/io'

import logo from '../../images/Logo.png'
import darkLogo from '../../images/dark-logo.png'

export default function Navbar({ variant }) {
  const overlayRef = useRef()
  const menuIconRef = useRef()
  const sideMenuRef = useRef()
  const closeIconRef = useRef()

  const toggleSideMenu = () => {
    overlayRef.current.classList.toggle('hide')
    sideMenuRef.current.classList.toggle('hide')
  }

  return (
    <header>
      <div className='overlay hide' ref={overlayRef}></div>

      <div className='navbar__links-mobile hide' ref={sideMenuRef}>
        <IoIosClose
          size={50}
          className='close-icon'
          ref={closeIconRef}
          onClick={toggleSideMenu}
        />
        <span>
          <Link to='/'>Home</Link>
        </span>
        <span>
          <Link to='/about'>About</Link>
        </span>
        <span>
          <Link to='/projects'>Projects</Link>
        </span>
        <span>
          <Link to='/contact-us'>Contact Us</Link>
        </span>
      </div>

      <nav className={`navbar ${variant == 'light' ? 'light' : ''}`}>
        <div className='container'>
          <img
            src={variant == 'light' ? darkLogo : logo}
            alt='logo'
            className='logo'
          />

          <div className='navbar__links'>
            <span>
              <Link to='/'>Home</Link>
            </span>
            <span>
              <Link to='/about'>About</Link>
            </span>
            <span>
              <Link to='/projects'>Projects</Link>
            </span>
            <span>
              <Link to='/contact-us'>Contact Us</Link>
            </span>
          </div>

          <div className='navbar__right'>
            <button>Get in touch</button>
            <IoIosMenu
              color={variant == 'light' ? '#0c0c0c' : '#FBFBFB'}
              size={35}
              className='menu-icon'
              ref={menuIconRef}
              onClick={toggleSideMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
