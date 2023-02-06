import React, {useState} from 'react'
import mercuryImg from './assets/planet-mercury.svg'

export default function Mercury ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='MercuryMainPage'>
          <div className='planetMercury'>
            <img src={mercuryImg} alt='planet'/>
          </div>
          <div className='planetInfo'>
            <h1 className='planetName'>MERCURY</h1>
            <p className='planetText'>Mercury is the smallest planet in the Solar System and"<br/> the closest to the Sun. Its orbit around the Sun takes <br/> 87.97 Earth days, the shortest of all the Sun's planets. <br/> Mercury is one of four terrestrial planets in the Solar <br/> System, and is a rocky body like Earth.</p>
            <p className='planetWiki'>Source : <a href="https://www.example.com">Wikipedia</a> </p>
            <div className='planetInfoBox'>
                <div className='boxInfo'>
                <h1 className='question'>ROTATION TIME</h1>
                <h1 className='answer'>56.6 DAYS</h1>
              </div>
                <div className='boxInfo'>
                <h1 className='question'>REVOLUTION TIME</h1>
                <h1 className='answer'>87.97 DAYS</h1>
              </div>
                <div className='boxInfo'>
                <h1 className='question'>RADIUS</h1>
                <h1 className='answer'>1,439.7 KM</h1>
              </div>
                <div className='boxInfo'>
                <h1 className='question'>AVERAGE TEMP.</h1>
                <h1 className='answer'>430 C</h1>
              </div>
              
            </div>
          </div>
        </div>
     ) :
        
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#DEF4FC"}}></div>
        <h1>MERCURY</h1>
        </div>
        
    } 
    </>
  )
}
