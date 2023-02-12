export default function Planet ({colors, name, open}) {
    return (
    <>  
       
            <div className="planets">
            <div className="circleColor" style={{backgroundColor:colors}}></div>
            <div className="planet">{name}</div>
            </div>
       

    </>
    )
}