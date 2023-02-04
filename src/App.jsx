import React from 'react'
import Countdown from './components/Countdown'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <main className='main container launch'>
        <h1 className='launch__title'>Countdown to the New Year</h1>
        <Countdown />
      </main>
      <Footer />
    </>
  )
}

export default App
