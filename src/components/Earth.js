import React, {useState} from 'react'

export default function Earth ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='earthMainPage'>
        <h1>Earth</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box">
        <div className="littleCircle" style={{backgroundColor:"#FF6A45"}}></div>
        <h1>EARTH</h1>
        </div>
        
    } 
    </>
  )
}
