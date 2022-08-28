import React from "react";
import Button from "../Button/Button";
import {FaPlusCircle,FaUser,FaArrowLeft,FaArrowRight} from "react-icons/fa"
import "./CircuitElement.css"
const CircuitElement=props=>{
    return(
        <div className="CircuitElement__container">
          <div className="flex_display">
            <div className="circuitImg">
                    <img src={props.imgUrl} />
                    <div className="Navicons">
                        <FaArrowLeft fontSize={27} color="white" />
                        <FaArrowRight fontSize={27} color="white" />
                    </div>
                </div>
                <div className="circuite_Info">
                    <p className="title_info">{props.title}</p>
                    <p>Distance : {props.distance}</p>
                    <p>Time : {props.time}</p>
                    <Button title={<p className='flex__center'><FaUser color="black" style={{marginRight:".81rem"}}/>  Montassar Trojette <FaPlusCircle fontSize={24} color="#FF4C65" style={{marginLeft:".81rem"}} /></p>}
                            isBlack={true}
                            color="#f3f3f3" 
                            width="20.7rem"
                            fontSize="16px"
                            borderRadius="30px" 
                           />
                </div>
          </div>
        </div>
    )
}
export default CircuitElement;