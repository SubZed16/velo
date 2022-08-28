import React from "react";
import "./ProgressDots.css"
const ProgressDots=({state})=>{
    return(
        <div className="ProgressDots_wrapper">
           <div className="dots_wrapper">
               <div className="dot_wrapper">
                 <p>Information</p>
                <div className={state==="information"?"bg_red":""} ></div>
               </div>
                
               <div className="dot_wrapper">
                 <p>Donnée technique</p>
                <div className={state==="donneetechnique"?"bg_red":""} ></div>
               </div>
                
               <div className="dot_wrapper">
                 <p>Validé</p>
                <div className={state==="valide"?"bg_red":""} ></div>
               </div>
           </div>
            <hr/>
        </div>
    )
}
export default ProgressDots;