import React from "react";
import { Footer } from "../../components";
import { Articals, Circuit, Header } from "../../containters";

import "./LandingPage.css"


const LandingPage=()=>{
    return(
        <div className="landingPage__section">
            <Header/>
            <Articals/>
            <Circuit/>
            <Footer/>
        </div>
    )
}

export default LandingPage;