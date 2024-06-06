/* eslint-disable react/prop-types */
import './FreeTrial.css'
import { IoIosArrowForward } from 'react-icons/io'

export default function FreeTrial({ variant }) {
  return (
    <button className={`free-trial ${variant == 'dark' ? 'dark' : ''}`}>
      <span>
        <IoIosArrowForward
          color={`${variant == 'dark' ? '#0c0c0c' : '#FBFBFB'}`}
        />
      </span>
      <span>Start your Free Trial</span>
    </button>
  )
}
