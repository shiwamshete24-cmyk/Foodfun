// https://preview.colorlib.com/theme/foodfun/index.html
import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Components/Header.jsx'
import Welcome from './Components/Welcome.jsx'
import Card from './Components/Card.jsx'
import Section1 from './Components/Section1.jsx'
import Section2 from './Components/Section2.jsx'
import Section3 from './Components/Section3.jsx'
import Mycard2 from './Components/Mycard2.jsx'
import Card2 from './Components/Card2.jsx'
import Section4 from './Components/Section4.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  

  return (
    <>
     
      <Header/>

     <Welcome/>
     
    <Card/>

    <Section1/>
     <Section2/>
     <Section3/>
     <Card2/>
     <Section4/>
     <Footer/>
      
    </>
  )
}

export default App
