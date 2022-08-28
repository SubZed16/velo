import React from "react";
import { Navbar } from "../../components";

import "./Header.css"


const Header=()=>{
    return(
        <div className="app__header__wrapper app__bg ">
             <Navbar isFliped={false} isMulty={false} isReactShit={false}/>
            <div className="app__header__Text-wrapper">
            <div className="app__header__wrapper-text">Acheter et vendre vos<br/> vélos en <span style={{color:"#FF4C65"}} >Tunisie</span></div>
            <div className="app__header__wrapper-text"></div>
            </div>
        </div>
    )
}

export default Header;