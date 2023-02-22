import PlanetOverview from "./PlanetOverview"
import Planets from "./Planets"
import React, {useState} from "react"
import PlanetInfo from "./PlanetInfo"

export default function LapPlanetPage ({mercury, venus, earth, mars, jupiter, saturn, uranus, neptune}) {
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

            ):earth ? (
                <>
                    <PlanetInfo earth={earth} name={'earth'}/>
                </>
            ):mars ? (
                <>
                    <PlanetInfo mars={mars} name={'mars'}/>
                </>
            ):jupiter ? (
                <>
                    <PlanetInfo jupiter={jupiter} name={'jupiter'}/>
                </>
            ):saturn ? (
                <>
                    <PlanetInfo saturn={saturn} name={'saturn'}/>
                </>
            ):uranus ? (
                <>
                    <PlanetInfo uranus={uranus} name={'uranus'}/>
                </>
            ):neptune ? (
                <>
                    <PlanetInfo neptune={neptune} name={'mars'}/>
                </>
            ):null}
        </>
    )
}