import { lazy } from 'react'

const Navbar = lazy(() => import('./Navbar/Navbar'))
const Hero = lazy(() => import('./Hero/Hero'))
const FreeTrial = lazy(() => import('./FreeTrial/FreeTrial'))
const Services = lazy(() => import('./Services/Services'))
const Service = lazy(() => import('./Service/Service'))
const AboutUs = lazy(() => import('./AboutUs/AboutUs'))
const Process = lazy(() => import('./Process/Process'))
const ProcessCard = lazy(() => import('./ProcessCard/ProcessCard'))
const Showcases = lazy(() => import('./Showcases/Showcases'))
const Showcase = lazy(() => import('./Showcase/Showcase'))
const Testimonials = lazy(() => import('./Testimonials/Testimonials'))
const Footer = lazy(() => import('./Footer/Footer'))
const Loading = lazy(() => import('./Loading/Loading'))
const LetsTalk = lazy(() => import('./LetsTalk/LetsTalk'))
const AboutHero = lazy(() => import('./AboutHero/AboutHero'))
const Statistics = lazy(() => import('./Statistics/Statistics'))
const Mission = lazy(() => import('./Mission/Mission'))
const Team = lazy(() => import('./Team/Team'))

export {
  Navbar,
  Hero,
  FreeTrial,
  Services,
  Service,
  AboutUs,
  Process,
  ProcessCard,
  Showcases,
  Showcase,
  Testimonials,
  Footer,
  Loading,
  LetsTalk,
  AboutHero,
  Statistics,
  Mission,
  Team,
}
