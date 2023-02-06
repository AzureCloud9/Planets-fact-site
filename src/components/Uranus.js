import React, {useState} from 'react'

export default function Uranus ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='UranusMainPage'>
        <h1>Uranus</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#65F0D5"}}></div>
        <h1>URANUS</h1>
        </div>
        
    } 
    </>
  )
}
