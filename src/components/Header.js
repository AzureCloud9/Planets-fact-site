import burger from './assets/icon-hamburger.svg'

export default function Header ({ isMobile, mainPage, setMainpage, handleClick}) {
    



    return (
    <>   
        {mainPage ? (
        <div className="menu">
            <div className="logoName">THE PLANETS</div>
           {isMobile ?  (<div className="hamburgerMenu"><img onClick={handleClick} src={burger} alt='img' style={{opacity:"1"}}/></div>):null }
        </div>) : (
        <div className="menu">
            <div className="logoName">THE PLANETS</div>
            {isMobile ?  (<div className="hamburgerMenu"><img onClick={handleClick} src={burger} alt='img' style={{opacity:"0.5"}}/></div>):null }            
        </div>
        ) }
    </> 
    )
}