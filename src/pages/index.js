import { lazy } from 'react'

const Home = lazy(() => import('./Home/Home'))
const About = lazy(() => import('./About/About'))
const ContactUs = lazy(() => import('./Contact Us/ContactUs'))
const Projects = lazy(() => import('./Projects/Projects'))
const ErrorPage = lazy(() => import('./ErrorPage/ErrorPage'))

export { Home, About, ContactUs, Projects, ErrorPage }
