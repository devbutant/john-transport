// Composants 
import logoWhite from './img/logo-white.svg'

import Navbar from './components/Navbar/Navbar'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Header from './components/Header/Header'
import About from './components/About/About'
import Reservation from './components/Reservation/Reservation'
import Testimonials from './components/Testimonials/Testimonials'
import './components/App/App.css'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
    <Navbar/>
      <MobileMenu/>
      <Header/>
      <About/>
      <Reservation/>
      <Testimonials/>

      <Footer/>
    </>
  )
}

export default App
