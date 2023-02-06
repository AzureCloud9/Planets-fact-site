import React, {useState} from 'react'

export default function Neptune ({open, handleClick}) {
  return (
    <>
     {open ? (
        
        <div className='neptuneMainPage'>
        <h1>Neptune</h1>
        </div>
     ) :
        <div onClick={handleClick} className="box" style={{borderBottom:"none"}}>
        <div className="littleCircle" style={{backgroundColor:"#497EFA"}}></div>
        <h1>NEPTUNE</h1>
        </div>
        
    } 
    </>
  )
}
