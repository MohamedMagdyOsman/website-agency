/* eslint-disable react/prop-types */
import './Service.css'

export default function Service({ variant, icon, title, desc }) {
  return (
    <div className={`service ${variant == 'light' ? 'light' : ''}`}>
      <span className={`${variant == 'light' ? 'light' : ''}`}>{icon}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}
