import React from "react";
import "./Overlay.css"

const Overlay=({color,isDark})=>{
    return(
    <div className={`overlay__wrapper ${isDark&& "darkershade"} `}>
        <div className={`triangle ${color==="yellow"?"yellowTop":"redTop"}`} />
        <div className={`triangle ${color==="yellow"?"yellowBottom":"redBottom"}`} />  
    </div>
    )
}
export default Overlay;