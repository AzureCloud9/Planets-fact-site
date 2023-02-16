export default function SubMenu ({overviewHandle, structureHandle, surfaceHandle, color, overview, structure, surface, isMobile}) {
    return (
        <>
        {overview ? (
            <div className="subMenu">
                <div style={{color:isMobile?"":"white", backgroundColor:!isMobile?color:null}} className="menuBox">{!isMobile ? <p className="menuBoxNum">01</p>:null} <p>OVERVIEW</p></div>
                <div onClick={structureHandle} className="menuBox">{!isMobile ? <p className="menuBoxNum">02</p>:null} <p>STRUCTURE</p></div>
                <div onClick={surfaceHandle} className="menuBox">{!isMobile ? <p className="menuBoxNum">03</p>:null} SURFACE</div>
            </div>): structure ? (
            <div className="subMenu">
                <div onClick={overviewHandle} className="menuBox">{!isMobile ? <p className="menuBoxNum">01</p>:null} <p>OVERVIEW</p></div>
                <div style={{color:isMobile?"#419EBB":"white", backgroundColor:!isMobile?color:null}} className="menuBox">{!isMobile ? <p className="menuBoxNum">02</p>:null} <p>STRUCTURE</p></div>
                <div onClick={surfaceHandle} className="menuBox">{!isMobile ? <p className="menuBoxNum">03</p>:null} SURFACE</div>
            </div>
            ): surface ? (
                <div className="subMenu">
                <div onClick={overviewHandle} className="menuBox">{!isMobile ? <p className="menuBoxNum">01</p>:null} <p>OVERVIEW</p></div>
                <div onClick={structureHandle} className="menuBox">{!isMobile ? <p className="menuBoxNum">02</p>:null} <p>STRUCTURE</p></div>
                <div style={{color:isMobile?"#419EBB":"white", backgroundColor:!isMobile?color:null}} className="menuBox">{!isMobile ? <p className="menuBoxNum">03</p>:null} SURFACE</div>
            </div>
            ):null
        }
            
        </>
    )
}