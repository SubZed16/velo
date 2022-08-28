import React from "react";
import {Overlay,Button} from "../../components"
import {MdPedalBike} from "react-icons/md"
import "./Circuit.css"


const Circuit=()=>{
    return(
        <div className="app__circuit__wrapper">
            <div className="circuit__bg">
            <Overlay
                 color="yellow"
                 isDark={true}
             />
                <div className="wrapper" >
                <a href="/cercuitsection"><p>Circuite <span style={{color:"#FFC33C"}}>TUNIS</span></p></a>
            <Button
                fontSize="35px"
                fontWeight="900"
                width="21rem"
                height="6rem"
                title={<p className="textalng"><a href="/cercuitsection"> Consulté</a> <MdPedalBike style={{marginLeft:"1.2rem"}} /> </p>}
                color="#FFC33C"
                borderRadius={false}
            />  
                </div>
            </div>
        </div>
    )
}

export default Circuit;

