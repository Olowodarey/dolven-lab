import React from 'react'
import Herosection from '../component/Herosection'
import About from '../component/About'
import Featuresection from "../component/Featuresection"
import Footer from "../component/Footer"

const Homepage = () => {
  return (

    <div className="max-w-7xl mx-auto pt-0 px-3">

<Herosection />
<About />
<Featuresection />
<Footer />

   </div>

 
  )
}

export default Homepage