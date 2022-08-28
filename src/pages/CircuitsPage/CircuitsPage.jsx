import React from "react";
import { Button, CircuitElement, Footer, Navbar } from "../../components";
import { circuites } from "../../constants/data";
import "./CircuitsPage.css"

const CircuitsPage=()=>{
    const circuitElements=circuites.map((element,i)=><CircuitElement imgUrl={element.imgUrl} distance={element.distance} time={element.time} title={element.title} key={i} />)
    return(
        <div className="app__CircuitsPage_wrapper">
            <Navbar isFliped={true} isMulty={true} isReactShit={false} />
            <div className="CircuitsPage_header_wrapper">
                <p> Cércuit Disponible</p>
                <a href="/">
                <Button
                fontSize="24px"
                fontWeight="900"
                width="15rem"
                height="4.2rem"
                title="Ajouter cércuit"
                color="#FFC33C"
                borderRadius={false}
                />
                </a>
            </div>
            {circuitElements}
            <Footer/>
        </div>
    )
}

export default CircuitsPage;