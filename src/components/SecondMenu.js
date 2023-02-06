import React, {useState} from 'react'


export default function SecondMenu({color}) {
    return (
        <div className='secondMenu'>
            <div className='box2' style={{borderBottom:color}}>
                <h1>OVERVIEW</h1>
            </div>
            <div className='box2'style={{borderBottom:color}} >
                <h1>STRUCTURE</h1>
            </div>
            <div className='box2'style={{borderBottom:color}}>
                <h1>SURFACE</h1>
            </div>
        </div>
    )
}