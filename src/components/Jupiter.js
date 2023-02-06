import React, {useState} from 'react'

export default function Jupiter ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='JupiterMainPage'>
        <h1>Jupiter</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#ECAD7A"}}></div>
        <h1>JUPITER</h1>
        </div>
        
    } 
    </>
  )
}
