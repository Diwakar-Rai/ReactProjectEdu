import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import NavContent from '../components/NavContent/NavContent'
import Counter from '../components/Counter/Counter'
import Courses from '../components/Courses/Courses'
import BootCamp from '../components/BootCamp/BootCamp'
import Pricing from '../components/Pricing/Pricing'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/footer/Footer'

const HomePage = () => {
  return (
    <>
      <section >
        <div className="home_container">
          
          <Navbar/>
          <NavContent />
          <Benefits />
          <Counter />
          <BootCamp/>
          <Courses/>
          <Pricing />
          {/* <Footer/> */}
        </div>
      </section>
    </>
  )
}

export default HomePage