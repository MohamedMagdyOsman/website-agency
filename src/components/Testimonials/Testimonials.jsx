import './Testimonials.css'
import { useRef } from 'react'
import man from '../../images/man.png'
import project01 from '../../images/project01.png'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export default function Testimonials() {
  const nextButtonRef = useRef()
  const PrevButtonRef = useRef()
  const sliderRef = useRef()

  const nextSlide = () => {
    sliderRef.current.style.transform = `translateX(-52%)`
  }

  const prevSlide = () => {
    sliderRef.current.style.transform = `translateX(0)`
  }

  return (
    <section className='testimonials'>
      <div className='container'>
        <div className='slider' ref={sliderRef}>
          <div className='slide'>
            <div>
              <img src={project01} alt='persone image' />
            </div>
            <p>
              “Be genuine in your assessment, and provide constructive feedback
              to benefit both potential customers and the company providing the
              product or service.”
            </p>
            <h4>Jacqueline Miller</h4>
            <p>CEO of an eduport</p>
          </div>
          <div className='slide'>
            <div>
              <img src={man} alt='persone image' />
            </div>
            <p>
              “Be genuine in your assessment, and provide constructive feedback
              to benefit both potential customers and the company providing the
              product or service.”
            </p>
            <h4>Jacqueline Miller</h4>
            <p>CEO of an eduport</p>
          </div>
        </div>
        <div className='slider__controls'>
          <span>
            <IoIosArrowBack
              size={20}
              color='#FBFBFB'
              ref={PrevButtonRef}
              onClick={prevSlide}
            />
          </span>
          <span>
            <IoIosArrowForward
              size={20}
              color='#FBFBFB'
              ref={nextButtonRef}
              onClick={nextSlide}
            />
          </span>
        </div>
      </div>
    </section>
  )
}
