import './ErrorPage.css'
import { useNavigate } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar variant={'light'} />
      <section className='error'>
        <h1>This Page Not Found!</h1>
        <button
          onClick={() => {
            navigate('/')
          }}>
          Go Home
        </button>
      </section>
      <Footer />
    </>
  )
}
