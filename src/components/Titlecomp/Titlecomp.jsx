import React from "react";
import "./Titlecomp.css"

const Titlecomp=({title})=>{
    return(
        <div className="Titlecomp-wrapper">
            <p>{title}</p>
                <div className="grayDiv">
                    <hr/>
                </div>
        </div>
    )
}

export default Titlecomp;