import React, {useState} from 'react'

export default function Mars ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='MarsMainPage'>
        <h1>Mars</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#FF6A45"}}></div>
        <h1>MARS</h1>
        </div>
        
    } 
    </>
  )
}
