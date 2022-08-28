import React from "react";
import { Footer, Navbar,SideBar, VeloItem } from "../../components";
import { bikes } from "../../constants/data";

import "./ShopingPage.css"

const ShopingPage=()=>{
    return(
        <div className="app__shopingPage_container">
            <Navbar isFliped={true} isMulty={true} isReactShit={false} />
            <div className="shopingPage_headerText flex__center"><p>Vélo</p></div>
            <div className="shopingPage__body_container">
                <SideBar/> 
                <div className="app__shopingPage__items-wrapper">
                {bikes.map((item,i)=>{
                    console.log(item)
                    return(
                    <VeloItem key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        price={item.price}
                        tags={item.tags}
                        isFav={item.isFav}
                        isHeartOn={true}
                    />)
                })}
                {bikes.map((item,i)=>{
                    console.log(item)
                    return(
                    <VeloItem key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        price={item.price}
                        tags={item.tags}
                        isFav={item.isFav}
                        isHeartOn={true}
                    />)
                })}
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ShopingPage;