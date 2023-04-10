import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <div className='w-72 bg-zinc-900 rounded-lg shadow-lg'>
      <Info></Info>
      <div className='px-4'>
        <About></About>
        <Interests></Interests>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
