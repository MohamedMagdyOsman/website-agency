import './Showcases.css'
import { FreeTrial, Showcase } from '../index'

import project01 from '../../images/project01.png'
import project02 from '../../images/project02.png'
import project03 from '../../images/project03.png'
import project04 from '../../images/project04.png'
import project05 from '../../images/project05.png'
import project06 from '../../images/project06.png'

export default function Showcases() {
  return (
    <section className='showcases'>
      <div className='container'>
        <h3>Recent Showcase</h3>
        <div className='showcases__freetrial'>
          <FreeTrial variant='dark' />
        </div>
        <div className='showcases__wrapper'>
          <Showcase
            image={project01}
            title='Web UI design'
            desc='Creative UI design'
          />
          <Showcase
            image={project02}
            title='To design Digital Strategy'
            desc='Social Media Marketing'
          />
          <Showcase
            image={project03}
            title='UI Design'
            desc='Creative Rebranding for logo'
          />
          <Showcase
            image={project04}
            title='UI Design'
            desc='Creative Rebranding for logo'
          />
          <Showcase
            image={project05}
            title='UI Design'
            desc='Creative Rebranding for logo'
          />
          <Showcase
            image={project06}
            title='UI Design'
            desc='Creative Rebranding for logo'
          />
        </div>
      </div>
    </section>
  )
}
