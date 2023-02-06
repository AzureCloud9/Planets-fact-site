import React, {useState} from 'react'

export default function Venus ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='venusMainPage'>
        <h1>Venus</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#F7CC7F"}}></div>
        <h1>VENUS</h1>
        </div>
        
    } 
    </>
  )
}
