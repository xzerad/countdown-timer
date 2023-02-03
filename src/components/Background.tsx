import moon from "../assets/moon.png"
import ufo from "../assets/ufo-cat.png"

export function Background({children}: any){
    return (
        <div className="background">
            <div>
                <img src={moon} alt="moon" className="moon"/>
                <img src={ufo} alt="a cat riding an ufo" className="ufo"/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}