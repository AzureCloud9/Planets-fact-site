import hamburger from './assets/icon-hamburger.svg'
import backgroundimg from './assets/background-stars.svg'

export default function Menu ({handleClickHamburger, menu}) {
    return (
        <>
        {menu ?  (<div className="menu">
            <h1>THE PLANETS</h1>
            <img src={hamburger} alt='hamburger' onClick={handleClickHamburger} style={{opacity:"1.0"}}/>
            </div>) : (
                <div className="menu">
                <h1>THE PLANETS</h1>
                <img src={hamburger} alt='hamburger'  style={{opacity:"0.5"}}/>
                </div>
            )
        }
        </>
        
    )
}

