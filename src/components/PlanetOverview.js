import SubMenu from "./SubMenu";

export default function PlanetOverview ({isMobile, surface, overViewDetails, img, size, name, menuToPlanet, planetToInfo, link, roTime, reTime, radius, avgTemp, img2, structureHandle, surfaceHandle, overviewhandle, overview, structure, hsize, wsize,ttop, lleft, mleft ,mright, color}) {
    return (
    <div className="planetOverview">
            <div className="planetAndInfo">
                <img src={img} alt="planet" style={{width:size, height:size,marginTop:menuToPlanet, marginBottom:planetToInfo, marginLeft:!isMobile? "335px" : null, marginRight:!isMobile?mright:null, marginLeft:!isMobile?mleft:null}}/>
                {surface ? (<img src={img2} alt="geography" style={{width:isMobile?"125px":wsize, height:isMobile?"125px":hsize,  position: "absolute", top:isMobile?"250px":ttop, left:isMobile?null:lleft}}/>): null}
            <div className="infoSidePlanet">
                <h1 className="planetName" >{name}</h1>
                <p className="planetInfo">{overViewDetails}</p>
                <p className="source">source: <a href={link} target="_blank" rel="noreferrer">Wikipedia</a></p>
                {!isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle}  color={color}/>) : null} 
            </div>
        </div>
        <div className="boxFlex">
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
        </div>
    )
}