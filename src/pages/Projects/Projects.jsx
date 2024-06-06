import './Projects.css'
import proejct01 from '../../images/project01.png'
import proejct02 from '../../images/project02.png'
import proejct03 from '../../images/project03.png'
import proejct04 from '../../images/project04.png'
import proejct05 from '../../images/project05.png'
import proejct06 from '../../images/project06.png'
import { Navbar, Footer, Showcase, LetsTalk } from '../../components'

export default function Projects() {
  return (
    <>
      <Navbar variant={`light`} />
      <div className='container'>
        <div className='projects-banner'>
          <h1>Our Portfolio</h1>
        </div>
      </div>
      <div className='projects-cards-wrapper'>
        <div className='container'>
          <Showcase
            image={proejct01}
            title={`Web UI design`}
            desc={'Creative  UI design'}
            move={false}
          />
          <Showcase
            image={proejct02}
            title={`Web UI design`}
            desc={'Creative  UI design'}
            move={false}
          />
          <Showcase
            image={proejct03}
            title={`Web UI design`}
            desc={'Creative  UI design'}
            move={false}
          />
          <Showcase
            image={proejct04}
            title={`Web UI design`}
            desc={'Creative  UI design'}
            move={false}
          />
          <Showcase
            image={proejct05}
            title={`Web UI design`}
            desc={'Creative  UI design'}
            move={false}
          />
          <Showcase
            image={proejct06}
            title={`Web UI design`}
            desc={'Creative  UI design'}
            move={false}
          />
        </div>
      </div>
      <LetsTalk />
      <Footer />
    </>
  )
}
