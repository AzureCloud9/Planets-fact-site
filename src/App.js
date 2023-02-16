import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Planets from './components/Planets';
import bgImage from "./components/assets/background-stars.svg"
import PlanetOverview from './components/PlanetOverview';
import PlanetInfo from './components/PlanetInfo';
import LapPlanetPage from './components/LapPlanetPage';
import Planet from './components/Planet';

function App() {
  const [mainPage, setMainpage] = useState(false)
  const [LMercury, setLMercury] = useState(true)
  const [LVenus, setLVenus] = useState(false)
  

  const isMobile = window.innerWidth < 1024;
  function mercuryHandle () {
    setLMercury(!LMercury)
    setLVenus(false)
  }
  
  function venusHandle() {
    setLMercury(false)
    setLVenus(!LVenus)
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
            <Planets LMercury={LMercury} LMercuryHandle={mercuryHandle} LVenus={LVenus} LVenusHandle={venusHandle} isMobile={isMobile} handleClick={handleClick} mainPage={mainPage} setMainpage={setMainpage}/>
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
