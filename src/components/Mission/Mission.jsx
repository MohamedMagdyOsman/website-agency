import './Mission.css'
import { FaCheckCircle } from 'react-icons/fa'

import person from '../../images/person.png'
import mission01 from '../../images/mission01.png'
import mission02 from '../../images/mission02.png'

export default function Mission() {
  return (
    <section className='mession'>
      <div className='container'>
        <div className='left'>
          <div>Our Mission</div>
          <h3>Boost your with your business.</h3>
          <p>
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy.
          </p>
          <div className='mession__checklist'>
            <div>
              <p>
                <FaCheckCircle color='#64ccc5' className='checkIcon' />{' '}
                Moonlight newspaper up its enjoyment
              </p>
              <p>
                <FaCheckCircle color='#64ccc5' className='checkIcon' /> She new
                course gets living.
              </p>
              <p>
                <FaCheckCircle color='#64ccc5' className='checkIcon' /> She new
                course gets living.
              </p>
            </div>
            <div>
              <p>
                <FaCheckCircle color='#64ccc5' className='checkIcon' /> Rooms oh
                fully taken by worse.
              </p>
              <p>
                <FaCheckCircle color='#64ccc5' className='checkIcon' />{' '}
                Perceived end certainly day.
              </p>
              <p>
                <FaCheckCircle color='#64ccc5' className='checkIcon' />{' '}
                Preference any astonishedunreserved Mrs.
              </p>
            </div>
          </div>
        </div>
        <div className='middle'>
          <img src={mission01} alt='people' />
          <div className='stats'>
            <div>
              <h4>10k</h4>
              <p>Great conversations per month</p>
            </div>
            <div>
              <h4>95+</h4>
              <p>Project Complete</p>
            </div>
          </div>
          <div className='team-members'>
            <p>Team Members</p>
            <div className='team-members-wrapper'>
              <img src={person} alt='person image' />
              <img src={person} alt='person image' />
              <img src={person} alt='person image' />
              <img src={person} alt='person image' />
              <img src={person} alt='person image' />
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={mission02} alt='people' />
        </div>
      </div>
    </section>
  )
}
