import React, {useState} from 'react'
import Mercury from './Mercury'
import Venus from './Venus'
import Earth from './Earth'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'
import Menu from './Menu'
import SecondMenu from './SecondMenu'


export default function MainPage ({}) {
    

const [openMercury, setOpenMercury] = useState(false)
const [openVenus, setOpenVenus] = useState(false)
const [openEarth, setOpenEarth] = useState(false)
const [openMars, setOpenMars] = useState(false)
const [openJupiter, setOpenJupiter] = useState(false)
const [openSaturn, setOpenSaturn] = useState(false)
const [openUranus, setOpenUranus] = useState(false)
const [openNeptune, setOpenNeptune] = useState(false)
const [menu, setMenu]= useState(false)



function handleClickMercury () {
    setOpenMercury(!openMercury)
    setOpenVenus(false)
    setOpenEarth(false)
    setOpenMars(false)
    setOpenJupiter(false)
    setOpenSaturn(false)
    setOpenUranus(false)
    setOpenNeptune(false)
    setMenu(!menu)
}

function handleClickVenus () {
    setOpenMercury(false)
    setOpenVenus(!openVenus)
    setOpenEarth(false)
    setOpenMars(false)
    setOpenJupiter(false)
    setOpenSaturn(false)
    setOpenUranus(false)
    setOpenNeptune(false)
    setMenu(!menu)
}

function handleClickEarth () {
    setOpenMercury(false)
    setOpenVenus(false)
    setOpenEarth(!openEarth)
    setOpenMars(false)
    setOpenJupiter(false)
    setOpenSaturn(false)
    setOpenUranus(false)
    setOpenNeptune(false)
    setMenu(!menu)
}


function handleClickMars () {
    setOpenMercury(false)
    setOpenVenus(false)
    setOpenEarth(false)
    setOpenMars(!openMars)
    setOpenJupiter(false)
    setOpenSaturn(false)
    setOpenUranus(false)
    setOpenNeptune(false)
    setMenu(!menu)
}

function handleClickJupiter () {
    setOpenMercury(false)
    setOpenVenus(false)
    setOpenEarth(false)
    setOpenMars(false)
    setOpenJupiter(!openJupiter)
    setOpenSaturn(false)
    setOpenUranus(false)
    setOpenNeptune(false)
    setMenu(!menu)
}

function handleClickSaturn () {
    setOpenMercury(false)
    setOpenVenus(false)
    setOpenEarth(false)
    setOpenMars(false)
    setOpenJupiter(false)
    setOpenSaturn(!openSaturn)
    setOpenUranus(false)
    setOpenNeptune(false)
    setMenu(!menu)
}

function handleClickUranus () {
    setOpenMercury(false)
    setOpenVenus(false)
    setOpenEarth(false)
    setOpenMars(false)
    setOpenJupiter(false)
    setOpenSaturn(false)
    setOpenUranus(!openUranus)
    setOpenNeptune(false)
    setMenu(!menu)
}

function handleClickNeptune () {
    setOpenMercury(false)
    setOpenVenus(false)
    setOpenEarth(false)
    setOpenMars(false)
    setOpenJupiter(false)
    setOpenSaturn(false)
    setOpenUranus(false)
    setOpenNeptune(!openNeptune)
    setMenu(!menu)
}

const handleClickHamburger = () => {
    setOpenMercury(false);
    setOpenVenus(false);
    setOpenEarth(false);
    setOpenMars(false);
    setOpenJupiter(false);
    setOpenSaturn(false);
    setOpenUranus(false);
    setOpenNeptune(false);
    setMenu(!menu)
  }

  

  


  return (
    <div className='mainPage'>
        {openMercury ? (
            <>  
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu color={"4px solid #419EBB"}/>
                <Mercury open={openMercury} handleClick={handleClickMercury}/>
            </>
        ) : openVenus ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Venus open={openVenus} handleClick={handleClickEarth}/>
            </>
        ) : openEarth ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Earth open={openEarth} handleClick={handleClickEarth}/>
            </>
        ) : openMars ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Mars open={openMars} handleClick={handleClickMars}/>
            </>
        ) : openJupiter ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Jupiter open={openJupiter} handleClick={handleClickJupiter}/>
            </>
        ) : openSaturn ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Saturn open={openSaturn} handleClick={handleClickSaturn}/>
            </>
        ) : openUranus ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Uranus open={openUranus} handleClick={handleClickUranus}/>
            </>
        ) : openNeptune ? (
            <>
                <Menu menu={menu} handleClickHamburger={handleClickHamburger} />
                <SecondMenu/>
                <Neptune open={openNeptune} handleClick={handleClickNeptune}/>
            </>
        ) : (
        <>  
            <Menu handleClickHamburger={handleClickHamburger} />
            <Mercury open={openMercury} handleClick={handleClickMercury} />
            <Venus open={openVenus} handleClick={handleClickVenus} />
            <Earth open={openEarth} handleClick={handleClickEarth} />
            <Mars open={openMars} handleClick={handleClickMars} />
            <Jupiter open={openJupiter} handleClick={handleClickJupiter}/>
            <Saturn open={openSaturn} handleClick={handleClickSaturn}/>
            <Uranus open={openUranus} handleClick={handleClickUranus}/>
            <Neptune open={openNeptune} handleClick={handleClickNeptune}/>
        </>
        )

        }
    </div>
  )
}

