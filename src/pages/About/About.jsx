import './About.css'
import {
  LetsTalk,
  Footer,
  Navbar,
  AboutHero,
  Statistics,
  Mission,
  Team,
} from '../../components'

export default function About() {
  return (
    <>
      <Navbar variant={'light'} />
      <AboutHero />
      <Statistics />
      <Mission />
      <Team />
      <LetsTalk />
      <Footer />
    </>
  )
}
