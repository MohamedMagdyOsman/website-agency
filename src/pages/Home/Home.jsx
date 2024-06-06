import './Home.css'
import {
  Hero,
  Navbar,
  Services,
  AboutUs,
  Process,
  Showcases,
  Testimonials,
  Footer,
} from '../../components'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <Showcases />
      <Testimonials />
      <Footer />
    </>
  )
}
