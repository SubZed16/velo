import React from "react";
import { Footer, Navbar } from "../../components";
import {ItemLable,SimilaireItems} from "../../containters";

import "./BuyingProductPage.css"

const BuyingProductPage=()=>{
    return(
        <div className="app__BuyingProductPage__wrappper">
           <Navbar
                isFliped={true}
                isMulty={true}
                />
            <ItemLable/>
            <SimilaireItems/>
            <Footer/>
        </div>
    )
}

export default BuyingProductPage;