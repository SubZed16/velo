import React from "react";
import InputLables from "../../containters/InputLables/InputLables";
import {Navbar, ProgressDots, SidebarElem, VeloItem} from "../../components"
import {Outlet, Router,ReactLocation} from "@tanstack/react-location"
import { modifiercompteLables, venderveloLabes } from "../../constants/lablesandinputs";
import { bikes } from "../../constants/data";
import "./MultipagePage.css"

const paths=[{
    path:"/troispagePage/mesfav",
    element:<div className="fav_bikes_wrapper">
    {bikes.map((item,i)=>{
         if(item.isFav){
            //console.log(item)
            return(
                <VeloItem key={i} 
                    imgUrl={item.imgUrl}
                    title={item.title}
                    price={item.price}
                    tags={item.tags}
                    isFav={item.isFav}
                    isHeartOn={true}
                />)
        }
        
    })}
    </div>
},{
    path:"/troispagePage/modifiercompte",
    element:<InputLables btnTitle="Modifier" inputs={modifiercompteLables} />
},{
    path:"/troispagePage/vendrevelo",
    element:<InputLables btnTitle="Suivant" inputs={venderveloLabes} />
}
,{
    path:"/troispagePage",
    element:<InputLables btnTitle="Suivant" inputs={venderveloLabes} />
}
]



const location =  new ReactLocation()


const MultipagePage=()=>{
    const [progessState,setProgressState]=React.useState(window.location.href.slice(window.location.href.lastIndexOf("/")+1))
    console.log(progessState)
    return(
        <div className="app__MultipagePage_wrapper">
             <Navbar isFliped={true} isMulty={false} isReactShit={true}/>
                {window.location.href.slice(window.location.href.indexOf("/vendrevelo"))===`/vendrevelo/${progessState}`&&(<ProgressDots state={progessState}/>)}
             <div className="app__MultipagePage_container"> 
                <div className="MultipagePage_sideBar">
                    <SidebarElem state={window.location.href.slice(window.location.href.lastIndexOf("/"))} />
                </div>
                 <Router routes={paths} location={location}>
                    <Outlet/>
                </Router>
             </div>
        </div>
    )
}

export default MultipagePage;