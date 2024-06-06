/* eslint-disable react/prop-types */
import './Showcase.css'

export default function Showcase({ image, title, desc, move }) {
  return (
    <div className={`showcase ${!move ? 'normal' : ''}`}>
      <img src={image} alt='project image' />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}
