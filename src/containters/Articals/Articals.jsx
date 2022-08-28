import React from "react";
import { VeloItem } from "../../components";
import {bikes} from "../../constants/data"
import "./Articals.css"


const Articals=()=>{
    return(
        <div className="app__articals__wrapper">
            <div className="app__articals__wrapper-title">
                <h1> Vélo occation</h1>
            </div>
            <div className="app__articals__items-wrapper">
                {bikes.map((item,i)=>{
                    console.log(item)
                    return(
                    <VeloItem key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        price={item.price}
                        tags={item.tags}
                        isHeartOn={false}
                    />)
                })}
            </div>
        </div>
    )
}

export default Articals;