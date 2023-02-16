import React, {useState} from "react"
import Planet from "./Planet"
import PlanetInfo from "./PlanetInfo"
import LapPlanetPage from "./LapPlanetPage"
export default function Planets ({mainPage, setMainpage, handleClick, isMobile, LMercuryHandle, LMercury, LVenusHandle,LVenus}) {


const [mercury, setMercury] = useState(false)
const [venus, setVenus] = useState(false)
const [earth, setEarth] = useState(false)
const [mars, setMars] = useState(false)
const [jupiter, setJupiter] = useState(false)
const [saturn, setSaturn] = useState(false)
const [uranus, setUranus] = useState(false)
const [neptune, setNeptune] = useState(false)


function handleClick() {
    setMainpage(!mainPage)

}

function mercuryHandle() {
setMercury(!mercury)
setVenus(false)
setEarth(false)
setMars(false)
setJupiter(false)
setSaturn(false)
setUranus(false)
setNeptune(false)
    handleClick()
}

function venusHandle() {
    setMercury(false)
    setVenus(!venus)
    setEarth(false)
    setMars(false)
    setJupiter(false)
    setSaturn(false)
    setUranus(false)
    setNeptune(false)
    handleClick()


} 
function earthHandle() {
    setMercury(false)
    setVenus(false)
    setEarth(!earth)
    setMars(false)
    setJupiter(false)
    setSaturn(false)
    setUranus(false)
    setNeptune(false)
    handleClick()



}
function marsHandle() {
    setMercury(false)
    setVenus(false)
    setEarth(false)
    setMars(!mars)
    setJupiter(false)
    setSaturn(false)
    setUranus(false)
    setNeptune(false)
    handleClick()
}
function jupiterHandle() {
    setMercury(false)
    setVenus(false)
    setEarth(false)
    setMars(false)
    setJupiter(!jupiter)
    setSaturn(false)
    setUranus(false)
    setNeptune(false)
    handleClick()
}
function saturnHandle() {
    setMercury(false)
    setVenus(false)
    setEarth(false)
    setMars(false)
    setJupiter(false)
    setSaturn(!saturn)
    setUranus(false)
    setNeptune(false)
    handleClick()
}
function uranusHandle() {
    setMercury(false)
    setVenus(false)
    setEarth(false)
    setMars(false)
    setJupiter(false)
    setSaturn(false)
    setUranus(!uranus)
    setNeptune(false)
    handleClick()
}
function neptuneHandle() {
    setMercury(false)
    setVenus(false)
    setEarth(false)
    setMars(false)
    setJupiter(false)
    setSaturn(false)
    setUranus(false)
    setNeptune(!neptune)
    handleClick()
}
    
    
    return (
      <>
        { isMobile && mercury && mainPage  ? (
            <div><PlanetInfo isMobile={isMobile} mercury={mercury} name={'Mercury'}/></div>
            ): isMobile && venus && mainPage ? (
                <div><PlanetInfo venus={venus} name={'Venus'}/></div>
            ): isMobile && earth && mainPage ? (
                <div><PlanetInfo earth={earth} name={'Earth'}/></div>
            ): isMobile && mars && mainPage ? (
                <div><PlanetInfo mars={mars} name={'Mars'}/></div>
            ): isMobile && jupiter && mainPage ? (
                <div><PlanetInfo jupiter={jupiter} name={'Jupiter'}/></div>
            ): isMobile && saturn && mainPage ? (
                <div><PlanetInfo saturn={saturn} name={'saturn'}/></div>
            ): isMobile && uranus && mainPage ? (
                <div><PlanetInfo uranus={uranus} name={'uranus'}/></div>
            ): isMobile && neptune && mainPage ? (
                <div><PlanetInfo neptune={neptune} name={'Neptune'}/></div>
            ): !mainPage && isMobile ? (
            <>    
                <div className="planetborder"  onClick={mercuryHandle} style={isMobile ? {marginTop: "20px"} : {}}>
                    <Planet name={'MERCURY'} colors={'#DEF4FC'}/>
                </div>
                <div className="planetborder" onClick={venusHandle}>
                    <Planet name={'VENUS'} colors={'#F7CC7F'}/>       
                </div>
                <div className="planetborder" onClick={earthHandle}>
                    <Planet name={'EARTH'} colors={'#545BFE'}/>       
                </div>
                <div className="planetborder" onClick={marsHandle}>
                    <Planet name={'MARS'} colors={'#FF6A45'}/>       
                </div>
                <div className="planetborder" onClick={jupiterHandle}>
                    <Planet name={'JUPITER'} colors={'#ECAD7A'}/>       
                </div>
                <div className="planetborder" onClick={saturnHandle}>
                    <Planet name={'SATURN'} colors={'#FCCB6B'}/>       
                </div>
                <div className="planetborder" onClick={uranusHandle}>
                    <Planet name={'URANUS'} colors={'#65F0D5'}/>       
                </div>
                <div className={!isMobile ? "planetborder" : ""} onClick={neptuneHandle}>
                    <Planet name={'NEPTUNE'} colors={'#497EFA'} />       
                </div>
            </>
// laptop       
// menu
            ) : !isMobile ?(
                <>    
                <div className="planetborder" onClick={!LMercury?LMercuryHandle:null}>
                    <Planet name={'MERCURY'} colors={'#DEF4FC'}/>
                </div>
                <div className="planetborder" onClick={!LVenus?LVenusHandle:null}>
                    <Planet name={'VENUS'} colors={'#F7CC7F'}/>       
                </div>
                <div className="planetborder" onClick={earthHandle}>
                    <Planet name={'EARTH'} colors={'#545BFE'}/>       
                </div>
                <div className="planetborder" onClick={marsHandle}>
                    <Planet name={'MARS'} colors={'#FF6A45'}/>       
                </div>
                <div className="planetborder" onClick={jupiterHandle}>
                    <Planet name={'JUPITER'} colors={'#ECAD7A'}/>       
                </div>
                <div className="planetborder" onClick={saturnHandle}>
                    <Planet name={'SATURN'} colors={'#FCCB6B'}/>       
                </div>
                <div className="planetborder" onClick={uranusHandle}>
                    <Planet name={'URANUS'} colors={'#65F0D5'}/>       
                </div>
                <div className={!isMobile ? "planetborder" : ""} onClick={neptuneHandle}>
                    <Planet name={'NEPTUNE'} colors={'#497EFA'} />       
                </div>
                </>

            ) : null
        }
    </>
    )
}