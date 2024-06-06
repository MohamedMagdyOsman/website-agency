import { useEffect, useRef, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { IoIosArrowUp } from 'react-icons/io'
import { Loading } from './components'
import {
  Home,
  About,
  ContactUs,
  Projects,
  ErrorPage,
} from './pages'

export default function App() {
  const scrollToTopRef = useRef()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handleScroll = () => {
      const { current } = scrollToTopRef;
      if (current) {
        const shouldShow = window.scrollY >= 100;
        current.classList.toggle('hide', !shouldShow);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <Routes>
        <Route exact path='/' element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        } />
        <Route path='/contact-us' element={
          <Suspense fallback={<Loading />}>
          <ContactUs />
        </Suspense>
        } />
        <Route path='/projects' element={
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={<Loading />}>
            <ErrorPage />
          </Suspense>
        } />
      </Routes>
      <div
        ref={scrollToTopRef}
        onClick={scrollToTop}
        className='scroll-top hide'>
        <IoIosArrowUp size={25} color='#FBFBFB' />
      </div>
    </>
  )
}
