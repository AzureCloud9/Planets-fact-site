import React, {useState} from 'react'

export default function Saturn ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='SaturnMainPage'>
        <h1>Saturn</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#FCCB6B"}}></div>
        <h1>SATURN</h1>
        </div>
        
    } 
    </>
  )
}
