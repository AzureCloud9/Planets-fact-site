import PlanetOverview from "./PlanetOverview"
import Planets from "./Planets"
import React, {useState} from "react"
import PlanetInfo from "./PlanetInfo"

export default function LapPlanetPage ({mercury, venus}) {
    return (
        <>
            {mercury ? (
                <>
                    <PlanetInfo mercury={mercury} name={'Mercury'}/>
                </>
            ):venus ? (
                <>
                    <PlanetInfo venus={venus} name={'venus'}/>
                </>

            ): null}
        </>
    )
}