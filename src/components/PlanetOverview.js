export default function PlanetOverview ({surface, overViewDetails, img, size, name, menuToPlanet, planetToInfo, link, roTime, reTime, radius, avgTemp, img2}) {
    return (
        <div className="planetOverview">
            <img src={img} alt="planet" style={{width:size, height:size,marginTop:menuToPlanet, marginBottom:planetToInfo}}/>
            {surface ? (<img src={img2} alt="geography" style={{width:"125px", height:"125px", position: "absolute", top:"250px"}}/>): null}
            <h1 className="planetName">{name}</h1>
            <p className="planetInfo">{overViewDetails}</p>
            <p className="source">source: <a href={link}>Wikipedia</a></p>
            <div className="boxMain">
                <h1 className="boxInfo">ROTATION TIME</h1>
                <h1 className="boxAnswer">{roTime}</h1>
            </div>
            <div className="boxMain">
                <h1 className="boxInfo">REVOLUTION TIME</h1>
                <h1 className="boxAnswer">{reTime}</h1>
            </div>
            <div className="boxMain">
                <h1 className="boxInfo">RADIUS</h1>
                <h1 className="boxAnswer">{radius}</h1>
            </div>
            <div className="boxMain" style={{marginBottom:"40px"}}>
                <h1 className="boxInfo">AVERAGE TEMP.</h1>
                <h1 className="boxAnswer">{avgTemp}</h1>
            </div>
        </div>
    )
}