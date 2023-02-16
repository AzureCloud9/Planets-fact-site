import React, {useState} from "react"
import PlanetOverview from "./PlanetOverview"
import SubMenu from "./SubMenu"
import imgMercury from "./assets/planet-mercury.svg"
import imgMercury2 from "./assets/planet-mercury-internal.svg"
import ImgMercury3 from "./assets/geology-mercury.png"
import imgVenus from "./assets/planet-venus.svg"
import imgVenus2 from "./assets/planet-venus-internal.svg"
import imgVenus3 from "./assets/geology-venus.png"
import imgEarth from "./assets/planet-earth.svg"
import imgEarth2 from "./assets/planet-earth-internal.svg"
import imgEarth3 from "./assets/geology-earth.png"
import imgMars from "./assets/planet-mars.svg"
import imgMars2 from "./assets/planet-mars-internal.svg"
import imgMars3 from "./assets/geology-mars.png"
import imgJupiter from "./assets/planet-jupiter.svg"
import imgJupiter2 from "./assets/planet-jupiter-internal.svg"
import imgJupiter3 from "./assets/geology-jupiter.png"
import imgSaturn from "./assets/planet-saturn.svg"
import imgSaturn2 from "./assets/planet-saturn-internal.svg"
import imgSaturn3 from "./assets/geology-saturn.png"
import imgUranus from "./assets/planet-uranus.svg"
import imgUranus2 from "./assets/planet-uranus-internal.svg"
import imgUranus3 from "./assets/geology-uranus.png"
import imgNeptune from "./assets/planet-neptune.svg"
import imgNeptune2 from "./assets/planet-neptune-internal.svg"
import imgNeptune3 from "./assets/geology-neptune.png"




export default function PlanetInfo ({mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, isMobile}) {
    const [overview, setOverview] = useState(true)
    const [structure, setStructure] = useState(false)
    const [surface, setSurface] = useState(false)
    const country = [
        {name: 'MERCURY', overview: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.", structure:"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",surface: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.", },
        {name: 'VENUS', overview: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.", structure: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.", surface:"Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii." },
        {name: 'EARTH', overview:"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.", structure:"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle." ,},
        {name: "MARS", overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".", structure: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.", surface: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."},
        {name: 'JUPITER', overview: "Jupiter is the largest planet in our Solar System and the fifth planet from the Sun. It is a giant gas planet with a mass that is more than 300 times that of Earth and is the first of the gas giants in the Solar System.", structure: "Jupiter has no solid surface and its atmosphere extends down to the center of the planet. The atmosphere is composed primarily of hydrogen and helium and its internal structure is believed to be composed of a central dense core, a hydrogen-helium rich layer and a metallic hydrogen layer.", surface: "Jupiter has no solid surface as it is a giant gas planet. The cloud tops are the visible surface and they are constantly changing due to the planet's strong winds and storms."},
        {name: "SATURN", overview: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.", structure: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.", surface: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."},
        {name: "URANUS", overview: "Uranus is the seventh planet from the Sun and the third largest planet in the Solar System. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of -224°C. Uranus is an ice giant, similar to Neptune.", structure: "Uranus has a rocky core surrounded by an icy mantle, which itself is surrounded by a thick atmosphere of hydrogen and helium. The planet's atmosphere contains trace amounts of methane, which gives it its blue-green color.", surface: "Uranus has no solid surface, and its atmosphere gradually transitions into its interior. The upper atmosphere is covered by a thick layer of clouds, consisting mainly of methane. Below this layer, the hydrogen and helium gradually become denser and turn into liquid."},
        {name: "NEPTUNE", overview: "Neptune is the eighth planet from the Sun and the fourth largest planet in the Solar System. It is an ice giant, similar to Uranus. Neptune has the strongest winds in the Solar System, with wind speeds reaching up to 2,100 kilometers per hour.", structure: "Neptune has a rocky core surrounded by an icy mantle, which is in turn surrounded by a thick atmosphere of hydrogen, helium, and methane. The planet's atmosphere gives it its blue color, due to the absorption of red light by methane in the atmosphere.", surface: "Like Uranus, Neptune has no solid surface. Its atmosphere gradually transitions into its interior, with the upper atmosphere covered by a layer of clouds consisting mainly of methane. Below this layer, the hydrogen and helium gradually become denser and turn into liquid."},
    ]

    function overviewhandle() {
        setOverview(!overview)
        setStructure(false)
        setSurface(false)
    }

    function structureHandle(){
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
            {overview && mercury ? (
            <>
               
            <>
                {isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={'3px solid #419EBB'}/>) : null} 
                <PlanetOverview overview={overview} structure={structure} surface={surface} overviewhandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={"#419EBB"} isMobile={isMobile} overViewDetails={country[0].overview} img={imgMercury} name={country[0].name} size={isMobile ? "111px" : "290px"} mleft={"335px"} mright={'300px'} menuToPlanet={isMobile ? "95px" : "242px"} planetToInfo={"98px"} roTime={"58.6 DAYS"} reTime={"87.97 DAYS"} radius={"2,439.7 KM"} avgTemp={"430°C"} link="https://en.wikipedia.org/wiki/Mercury_(planet)" />
            </>


            </>
            ) : structure && mercury ? (
            <>
                {isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={'3px solid #419EBB'}/>) : null} 
                <PlanetOverview structure={structure} overviewhandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle}  isMobile={isMobile} color={"#419EBB"} overViewDetails={country[0].structure} img={imgMercury2} name={country[0].name} size={isMobile ? "111px" : "290px"} mleft={'335px'} mright={'300px'} menuToPlanet={isMobile ? "95px" : "242px"} planetToInfo={"98px"} roTime={"58.6 DAYS"} reTime={"87.97 DAYS"} radius={"2,439.7 KM"} avgTemp={"430°C"} link="https://en.wikipedia.org/wiki/Mercury_(planet)" />
            </>
               
            ): surface && mercury ? (
        <>
                {isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={'3px solid #419EBB'}/>) : null} 
                <PlanetOverview surface={surface} overviewhandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle}  isMobile={isMobile} color={"#419EBB"} overViewDetails={country[0].surface} img={imgMercury} img2={ImgMercury3} name={country[0].name} size={isMobile ? "111px" : "290px"} wsize={"163px"} hsize={"199px"} ttop={"468px"} lleft={"399px"} mleft={'335px'} mright={'300px'} menuToPlanet={isMobile ? "95px" : "242px"} planetToInfo={"98px"} roTime={"58.6 DAYS"} reTime={"87.97 DAYS"} radius={"2,439.7 KM"} avgTemp={"430°C"} link="https://en.wikipedia.org/wiki/Mercury_(planet)" />

            </>
            ) : overview && venus ? (
            <>
                {isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={'3px solid #EDA249'}/>) : null} 
                <PlanetOverview overview={overview} structure={structure} surface={surface} overviewhandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} isMobile={isMobile} color={'#EDA249'} overViewDetails={country[1].overview} img={imgVenus} name={country[1].name} size={isMobile ? "154px" : "400px"} mleft={'280px'} mright={'245px'} menuToPlanet={isMobile ? "74px" : "187px"} planetToInfo={"76px"} roTime={"243 DAYS"} reTime={"224.7 DAYS"} radius={"6,051.8 KM"} avgTemp={"471°C"} link="https://en.wikipedia.org/wiki/Venus" />

            </> 
             ) : structure && venus ? (
            <>
                {isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={'3px solid #EDA249'}/>) : null} 
                <PlanetOverview structure={structure} overviewhandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle}  isMobile={isMobile} color={"#EDA249"} overViewDetails={country[1].structure} img={imgVenus2} name={country[1].name} size={isMobile ? "154px" : "400px"} mleft={'280px'} mright={'245px'} menuToPlanet={isMobile ? "74px" : "187px"} planetToInfo={"98px"} roTime={"243 DAYS"} reTime={"224.7 DAYS"} radius={"6,051.8 KM"} avgTemp={"471°C"} link="https://en.wikipedia.org/wiki/Venus"/>

            </>
             ): surface && venus ? (
            <>         
                {isMobile ? (<SubMenu isMobile={isMobile} overview={overview} structure={structure} surface={surface} overviewHandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle} color={'3px solid #EDA249'}/>) : null} 
                <PlanetOverview surface={surface} overviewhandle={overviewhandle} structureHandle={structureHandle} surfaceHandle={surfaceHandle}  isMobile={isMobile} color={"#EDA249"} overViewDetails={country[1].surface} img={imgVenus} img2={imgVenus3} name={country[1].name} size={isMobile ? "154px" : "400px"} wsize={"163px"} hsize={"199px"} ttop={"468px"} lleft={"399px"} mleft={'280px'} mright={'245px'} menuToPlanet={isMobile ? "74px" : "187px"} planetToInfo={"98px"} roTime={"243 DAYS"} reTime={"224.7 DAYS"} radius={"6,051.8 KM"} avgTemp={"471°C"} link="https://en.wikipedia.org/wiki/Venus"/>

            </>
             ) : overview && earth ? (
            <>
                <div className="subMenu">
                     <div style={{borderBottom:"3px solid #6D2ED5"}} className="overview">OVERVIEW</div>
                     <div onClick={structureHandle} className="structure">STRUCTURE</div>
                     <div onClick={surfaceHandle} className="surface">SURFACE</div>
                </div>
                <PlanetOverview overViewDetails={country[2].overview} img={imgEarth} name={country[2].name} size={"173px"} menuToPlanet={'64px'} planetToInfo={"67px"} roTime={"0.99 DAYS"} reTime={"365.26 DAYS"} radius={"6,371 KM"} avgTemp={"16°C"} link="https://en.wikipedia.org/wiki/Earth" />

            </>
             ) : structure && earth ? (
            <>
                 <div className="subMenu">
                     <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                     <div style={{borderBottom:"3px solid #6D2ED5"}}  className="structure">STRUCTURE</div>
                     <div onClick={surfaceHandle} style={{borderBottom:"none"}} className="surface">SURFACE</div>
                </div>
                <PlanetOverview overViewDetails={country[2].structure} img={imgEarth2} name={country[2].name} size={"173px"} menuToPlanet={'64px'} planetToInfo={"67px"} roTime={"0.99 DAYS"} reTime={"365.26 DAYS"} radius={"6,371 KM"} avgTemp={"16°C"} link="https://en.wikipedia.org/wiki/Earth#Internal_structure" />

            </>
             ): surface && earth ? (
            <>
                 <div className="subMenu">
                     <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                     <div onClick={structureHandle} style={{borderBottom:"none"}}   className="structure">STRUCTURE</div>
                     <div style={{borderBottom:"3px solid #6D2ED5"}} className="surface">SURFACE</div>
                </div>
                <PlanetOverview surface={surface} overViewDetails={country[2].structure} img={imgEarth} img2={imgEarth3} name={country[2].name} size={"173px"} menuToPlanet={'64px'} planetToInfo={"67px"} roTime={"0.99 DAYS"} reTime={"365.26 DAYS"} radius={"6,371 KM"} avgTemp={"16°C"} link="https://en.wikipedia.org/wiki/Mercury_(planet)" />

            </>
             ) : overview && mars ? (
                <>
                    <div className="subMenu">
                         <div style={{borderBottom:"3px solid #CD5120"}} className="overview">OVERVIEW</div>
                         <div onClick={structureHandle} className="structure">STRUCTURE</div>
                         <div onClick={surfaceHandle} className="surface">SURFACE</div>
                    </div>
                    <PlanetOverview overViewDetails={country[3].overview} img={imgMars} name={country[3].name} size={"129px"} menuToPlanet={'87px'} planetToInfo={"88px"} roTime={"1.03 DAYS"} reTime={"1.88 Years"} radius={"3,389.5 KM"} avgTemp={"-28°C"} link="https://en.wikipedia.org/wiki/Mars" />
    
                </>
                 ) : structure && mars ? (
                <>
                     <div className="subMenu">
                         <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                         <div style={{borderBottom:"3px solid #CD5120"}}  className="structure">STRUCTURE</div>
                         <div onClick={surfaceHandle} style={{borderBottom:"none"}} className="surface">SURFACE</div>
                    </div>
                    <PlanetOverview overViewDetails={country[3].structure} img={imgMars2} name={country[3].name} size={"129px"} menuToPlanet={'87px'} planetToInfo={"88px"} roTime={"1.03 DAYS"} reTime={"1.88 Years"} radius={"3,389.5 KM"} avgTemp={"-28°C"} link="https://en.wikipedia.org/wiki/Mars#Internal_structure" />
    
                </>
                 ): surface && mars ? (
                <>
                     <div className="subMenu">
                         <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                         <div onClick={structureHandle} style={{borderBottom:"none"}}   className="structure">STRUCTURE</div>
                         <div style={{borderBottom:"3px solid #CD5120"}} className="surface">SURFACE</div>
                    </div>
                    <PlanetOverview surface={surface} overViewDetails={country[3].structure} img={imgMars} img2={imgMars3} name={country[3].name} size={"129px"} menuToPlanet={'87px'} planetToInfo={"88px"} roTime={"1.03 DAYS"} reTime={"1.88 Years"} radius={"3,389.5 KM"} avgTemp={"-28°C"} link="https://en.wikipedia.org/wiki/Mars#Surface_geology" />
    
                </>
                 ) : overview && jupiter ? (
                <>
                    <div className="subMenu">
                            <div style={{borderBottom:"3px solid #CD5120"}} className="overview">OVERVIEW</div>
                            <div onClick={structureHandle} className="structure">STRUCTURE</div>
                            <div onClick={surfaceHandle} className="surface">SURFACE</div>
                    </div>
                    <PlanetOverview overViewDetails={country[4].overview} img={imgJupiter} name={country[4].name} size={"224px"} menuToPlanet={'39px'} planetToInfo={"41px"} roTime={"9.92 HOURS"} reTime={"11.86 YEARS"} radius={"71,492 KM"} avgTemp={"-145°C"} link="https://en.wikipedia.org/wiki/Jupiter" />
    
                </>
                    ) : structure && jupiter ? (
                <>
                        <div className="subMenu">
                            <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                            <div style={{borderBottom:"3px solid #CD5120"}}  className="structure">STRUCTURE</div>
                            <div onClick={surfaceHandle} style={{borderBottom:"none"}} className="surface">SURFACE</div>
                    </div>
                    <PlanetOverview overViewDetails={country[4].structure} img={imgJupiter2} name={country[4].name} size={"224px"} menuToPlanet={'39px'} planetToInfo={"41px"} roTime={"9.92 HOURS"} reTime={"11.86 YEARS"} radius={"71,492 KM"} avgTemp={"-145°C"} link="https://en.wikipedia.org/wiki/Jupiter" />
    
                </>
                    ): surface && jupiter ? (
                <>
                        <div className="subMenu">
                            <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                            <div onClick={structureHandle} style={{borderBottom:"none"}}   className="structure">STRUCTURE</div>
                            <div style={{borderBottom:"3px solid #CD5120"}} className="surface">SURFACE</div>
                    </div>
                    <PlanetOverview surface={surface} overViewDetails={country[4].surface} img={imgJupiter} img2={imgJupiter3} name={country[4].name} size={"224px"} menuToPlanet={'39px'} planetToInfo={"41px"} roTime={"9.92 HOURS"} reTime={"11.86 YEARS"} radius={"71,492 KM"} avgTemp={"-145°C"} link="https://en.wikipedia.org/wiki/Jupiter" />
    
                </>
                ) : overview && saturn ? (
                    <>
                        <div className="subMenu">
                                <div style={{borderBottom:"3px solid #CD5120"}} className="overview">OVERVIEW</div>
                                <div onClick={structureHandle} className="structure">STRUCTURE</div>
                                <div onClick={surfaceHandle} className="surface">SURFACE</div>
                        </div>
                        <PlanetOverview overViewDetails={country[5].overview} img={imgSaturn} name={country[5].name} size={"224px"} menuToPlanet={'24px'} planetToInfo={"24px"} roTime={"10.7 HOURS"} reTime={"29.46 YEARS"} radius={"60,268 KM"} avgTemp={"-140°C"} link="https://en.wikipedia.org/wiki/Saturn" />
        
                    </>
                        ) : structure && saturn ? (
                    <>
                            <div className="subMenu">
                                <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                                <div style={{borderBottom:"3px solid #CD5120"}}  className="structure">STRUCTURE</div>
                                <div onClick={surfaceHandle} style={{borderBottom:"none"}} className="surface">SURFACE</div>
                        </div>
                        <PlanetOverview overViewDetails={country[5].structure} img={imgSaturn2} name={country[5].name} size={"224px"} menuToPlanet={'24px'} planetToInfo={"24px"} roTime={"10.7 HOURS"} reTime={"29.46 YEARS"} radius={"60,268 KM"} avgTemp={"-140°C"} link="https://en.wikipedia.org/wiki/Saturn" />
        
                    </>
                        ): surface && saturn ? (
                    <>
                            <div className="subMenu">
                                <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                                <div onClick={structureHandle} style={{borderBottom:"none"}}   className="structure">STRUCTURE</div>
                                <div style={{borderBottom:"3px solid #CD5120"}} className="surface">SURFACE</div>
                        </div>
                        <PlanetOverview surface={surface} overViewDetails={country[5].surface} img={imgSaturn} img2={imgSaturn3} name={country[5].name} size={"224px"} menuToPlanet={'24px'} planetToInfo={"24px"} roTime={"10.7 HOURS"} reTime={"29.46 YEARS"} radius={"60,268 KM"} avgTemp={"-140°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                    </>
                    ): overview && uranus ? (
                        <>
                            <div className="subMenu">
                                <div style={{borderBottom:"3px solid #1EC1A2"}} className="overview">OVERVIEW</div>
                                <div onClick={structureHandle} className="structure">STRUCTURE</div>
                                <div onClick={surfaceHandle} className="surface">SURFACE</div>
                            </div>
                        <PlanetOverview overViewDetails={country[6].overview} img={imgUranus} name={country[6].name} size={"176px"} menuToPlanet={'73px'} planetToInfo={"65px"} roTime={"17.2 HOURS"} reTime={"84 YEARS"} radius={"25,362 KM"} avgTemp={"-195°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                     
                        </>
                    ): structure && uranus ? (
                        <>
                            <div className="subMenu">
                                <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                                <div style={{borderBottom:"3px solid #1EC1A2"}}  className="structure">STRUCTURE</div>
                                <div onClick={surfaceHandle} style={{borderBottom:"none"}} className="surface">SURFACE</div>
                            </div>
                            <PlanetOverview overViewDetails={country[6].structure} img={imgUranus2} name={country[6].name} size={"176px"} menuToPlanet={'73px'} planetToInfo={"65px"} roTime={"17.2 HOURS"} reTime={"84 YEARS"} radius={"25,362 KM"} avgTemp={"-195°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                        </>
                    ): surface && uranus ? (
                        <>
                            <div className="subMenu">
                                <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                                <div onClick={structureHandle} style={{borderBottom:"none"}}   className="structure">STRUCTURE</div>
                                <div style={{borderBottom:"3px solid #1EC1A2"}} className="surface">SURFACE</div>
                            </div>
                            <PlanetOverview surface={surface} overViewDetails={country[6].surface} img={imgUranus} img2={imgUranus3} name={country[6].name} size={"176px"} menuToPlanet={'73px'} planetToInfo={"65px"} roTime={"17.2 HOURS"} reTime={"84 YEARS"} radius={"25,362 KM"} avgTemp={"-195°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                        </>
                    ): overview && neptune ? (
                        <>
                            <div className="subMenu">
                                <div style={{borderBottom:"3px solid #2D68F0"}} className="overview">OVERVIEW</div>
                                <div onClick={structureHandle} className="structure">STRUCTURE</div>
                                <div onClick={surfaceHandle} className="surface">SURFACE</div>
                            </div>
                        <PlanetOverview overViewDetails={country[7].overview} img={imgNeptune} name={country[7].name} size={"173px"} menuToPlanet={'64px'} planetToInfo={"67px"} roTime={"16.02 HOURS"} reTime={"164.79 YEARS"} radius={"24,662 KM"} avgTemp={"-201°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                     
                        </>
                    ): structure && neptune ? (
                        <>
                            <div className="subMenu">
                                <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                                <div style={{borderBottom:"3px solid #2D68F0"}}  className="structure">STRUCTURE</div>
                                <div onClick={surfaceHandle} style={{borderBottom:"none"}} className="surface">SURFACE</div>
                            </div>
                            <PlanetOverview overViewDetails={country[7].structure} img={imgNeptune2} name={country[7].name} size={"173px"} menuToPlanet={'64px'} planetToInfo={"67px"} roTime={"16.02 HOURS"} reTime={"164.79 YEARS"} radius={"24,662 KM"} avgTemp={"-201°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                        </>
                    ): surface && neptune ? (
                        <>
                            <div className="subMenu">
                                <div onClick={overviewhandle} style={{borderBottom:"none"}} className="overview">OVERVIEW</div>
                                <div onClick={structureHandle} style={{borderBottom:"none"}}   className="structure">STRUCTURE</div>
                                <div style={{borderBottom:"3px solid #2D68F0"}} className="surface">SURFACE</div>
                            </div>
                            <PlanetOverview surface={surface} overViewDetails={country[7].surface} img={imgNeptune} img2={imgNeptune3} name={country[7].name} size={"173px"} menuToPlanet={'64px'} planetToInfo={"67px"} roTime={"16.02 HOURS"} reTime={"164.79 YEARS"} radius={"24,662 KM"} avgTemp={"-201°C"} link="https://en.wikipedia.org/wiki/Saturn" />
                        </>
                    ) :null
        }
        </>
    )
}