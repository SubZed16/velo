import React from "react";
import "./SimilaireItems.css"
import {bikes} from "../../constants/data"
import { VeloItem } from "../../components";
import {BsCircleFill} from "react-icons/bs"
const SimilaireItems=()=>{
    const imgsScrollRef=React.useRef(null)
    const [state,setState]=React.useState(true)
    const scroll=direction=>{
        console.log("clicked")
        const {current}=imgsScrollRef
        if(direction==="left"){
          current.scrollLeft -=1024
          setState(true)
        }else{
          current.scrollLeft +=1000
          setState(false)
        }
      }
     
    return(
        <div className="app__similaireItem__wrapper">
           <p className="app__similaireItem__wrapper-title"> Similare </p>
            <div className='app__similaireItem__velos_wrapper' ref={imgsScrollRef}>
          {
            bikes.map((item,i)=>{
              return(
                <div className='img__card flex__center' key={i}>
                   <VeloItem key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        price={item.price}
                        tags={item.tags}
                    />
                </div>
              )
            })
          }
        </div>
          <div className="navIcons__wrapper flex__center">
              <BsCircleFill color={`${!state?"var(--color-gray)":"var(--main-red)"}`} fontSize={24} onClick={()=>{scroll("left")}} />
              <BsCircleFill color={`${state?"var(--color-gray)":"var(--main-red)"}`} fontSize={24} onClick={()=>{scroll("right")}} />
          </div>
          <div>
          </div>
        </div>
    )
}
export default SimilaireItems;
