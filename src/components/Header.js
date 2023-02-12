import burger from './assets/icon-hamburger.svg'

export default function Header ({mainPage, setMainpage, handleClick}) {



    return (
    <>   
        {mainPage ? (
        <div className="menu">
            <div className="logoName">THE PLANETS</div>
            <div className="hamburgerMenu"><img onClick={handleClick} src={burger} alt='img' style={{opacity:"1"}}/></div>
        </div>) : (
        <div className="menu">
            <div className="logoName">THE PLANETS</div>
            <div className="hamburgerMenu"><img src={burger} alt='img' style={{opacity:"0.5"}}/></div>
        </div>

        )}
    </> 
    )
}