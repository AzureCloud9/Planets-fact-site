import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Planets from './components/Planets';
import LapPlanetPage from './components/LapPlanetPage';

function App() {
  const [mainPage, setMainpage] = useState(false)
  const [LMercury, setLMercury] = useState(true)
  const [LVenus, setLVenus] = useState(false)
  const [LEarth, setLEarth] = useState(false)
  const [LMars, setLMars] = useState(false)
  const [LJupiter, setLJupiter] = useState(false)
  const [LSaturn, setLSaturn] = useState(false)
  const [LUranus, setLUranus] = useState(false)
  const [LNeptune, setLNeptune] = useState(false)
  const isMobile = window.innerWidth < 1024;
  
  function mercuryHandle () {
    setLMercury(!LMercury)
    setLVenus(false)
    setLEarth(false)
    setLMars(false)
    setLJupiter(false)
    setLSaturn(false)
    setLUranus(false)
    setLNeptune(false)
  }
  
  function venusHandle() {
    setLMercury(false)
    setLVenus(!LVenus)
    setLEarth(false)
    setLMars(false)
    setLJupiter(false)
    setLSaturn(false)
    setLUranus(false)
    setLNeptune(false)
  }

  function earthHandle() {
    setLMercury(false)
    setLVenus(false)
    setLEarth(!LEarth)
    setLMars(false)
    setLJupiter(false)
    setLSaturn(false)
    setLUranus(false)
    setLNeptune(false)
  }

  function marsHandle () {
    setLMercury(false)
    setLVenus(false)
    setLEarth(false)
    setLMars(!LMars)
    setLJupiter(false)
    setLSaturn(false)
    setLUranus(false)
    setLNeptune(false)
  }

  function jupiterHandle () {
    setLMercury(false)
    setLVenus(false)
    setLEarth(false)
    setLMars(false)
    setLJupiter(!LJupiter)
    setLSaturn(false)
    setLUranus(false)
    setLNeptune(false)
  }

  function saturnHandle () {
    setLMercury(false)
    setLVenus(false)
    setLEarth(false)
    setLMars(false)
    setLJupiter(false)
    setLSaturn(!LSaturn)
    setLUranus(false)
    setLNeptune(false)
  }

  function uranusHandle () {
    setLMercury(false)
    setLVenus(false)
    setLEarth(false)
    setLMars(false)
    setLJupiter(false)
    setLSaturn(false)
    setLUranus(!LUranus)
    setLNeptune(false)
  }

  function neptuneHandle () {
    setLMercury(false)
    setLVenus(false)
    setLEarth(false)
    setLMars(false)
    setLJupiter(false)
    setLSaturn(false)
    setLUranus(false)
    setLNeptune(!LNeptune)
  }

  function handleClick () {
    setMainpage(!mainPage)
   
}

 
  return (
    <div className="App">
      {!isMobile ? (
        <>
          <div className='laptopMenu'>
            <Header isMobile={isMobile} handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage} />
            <Planets LMercury={LMercury} LMercuryHandle={mercuryHandle}
                     LVenus={LVenus} LVenusHandle={venusHandle} 
                     LEarth={LEarth} LEarthHandle={earthHandle}
                     LMars={LMars}   LMarsHandle={marsHandle}
                     LJupiter={LJupiter} LJupiterHandle={jupiterHandle}
                     LSaturn={LSaturn} LSaturnHandle={saturnHandle}
                     LUranus={LUranus} LUranusHandle={uranusHandle}
                     LNeptune={LNeptune} LNeptuneHandle={neptuneHandle}
                    isMobile={isMobile} handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage}/>
          </div>
          <>
            {LMercury ? (
              <>
                <LapPlanetPage mercury={LMercury} />
              </>
            ):LVenus ? (
              <>
                <LapPlanetPage venus={LVenus} />
              </>
            ):LEarth ? (
              <>
                <LapPlanetPage earth={LEarth} />
              </>
            ):LMars ? (
              <>
                <LapPlanetPage mars={LMars} />
              </>
            ):LJupiter ? (
              <>
                <LapPlanetPage jupiter={LJupiter} />
              </>
            ):LSaturn ? (
              <>
                <LapPlanetPage saturn={LSaturn} />
              </>
            ):LUranus ? (
              <>
                <LapPlanetPage uranus={LUranus} />
              </>
            ):LNeptune ? (
              <>
                <LapPlanetPage neptune={LNeptune} />
              </>
            ):null}
            
          </>
        </>
      ): (
        <>
          <Header isMobile={isMobile} handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage} />
          <Planets isMobile={isMobile} handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage}/>
        </>
      )}
      
    </div>
  );
}

export default App;
