/* eslint-disable react/prop-types */
import './ProcessCard.css'

export default function ProcessCard({ icon, title, desc }) {
  return (
    <div className='process__card'>
      <div>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      {desc}
    </div>
  )
}
