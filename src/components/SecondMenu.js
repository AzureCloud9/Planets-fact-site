import React, {useState} from 'react'


export default function SecondMenu({color}) {

    const [overview, setOverview] = useState(true)
    const [structure, setStructure] = useState(false)
    const [surface, setSurface] = useState(true)



    function overviewHandle () {
        setOverview(!overview)
        setStructure(false)
        setSurface(false)
    }

    function structureHandle () {
        setOverview(false)
        setStructure(!structure)
        setSurface(false)
    }

    function surfaceHandle() {
        setOverview(false)
        setStructure(false)
        setSurface(!surface)
    }
    return (
    <>  
        {overview ?
             (<div className='secondMenu'>
                <div className='box2' style={{borderBottom:"4px solid #419EBB"}}>
                    <h1>OVERVIEW</h1>
                </div>
                <div onClick={structureHandle} className='box2' >
                    <h1>STRUCTURE</h1>
                </div>
                <div onClick={surfaceHandle} className='box2'>
                    <h1>SURFACE</h1>
                </div>
            </div>) : structure ? (
                <div className='secondMenu'>
                <div className='box2'onClick={overviewHandle} >
                    <h1>OVERVIEW</h1>
                </div>
                <div className='box2' style={{borderBottom:"4px solid #419EBB"}} >
                    <h1>STRUCTURE</h1>
                </div>
                <div onClick={surfaceHandle} className='box2'>
                    <h1>SURFACE</h1>
                </div>
            </div>
            ) : surface ? (
                <div className='secondMenu'>
                <div className='box2' onClick={overviewHandle} >
                    <h1>OVERVIEW</h1>
                </div>
                <div className='box2' onClick={structureHandle}>
                    <h1>STRUCTURE</h1>
                </div>
                <div className='box2' style={{borderBottom:"4px solid #419EBB"}} >
                    <h1>SURFACE</h1>
                </div>
            </div>
            )

            :null
            }
    </> 
    )
}