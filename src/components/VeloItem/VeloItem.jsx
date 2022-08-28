import React from 'react';
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import './VeloItem.css';

const VeloItem = (props) =>{
  const styleOject={
   /*  background:`url(${props.imgUrl})`, */
    width:"100%",
    height:"auto",
/*     objectFit:"cover", */
  }
  const [isFav,setIsfav]=React.useState(props.isFav)
  const handleChange=()=>{
    setIsfav(prev=>!prev)
  }
  return (
    <div className='veloItem__wrapper'>
      <div style={styleOject}>
        <a href="/acheterunvelo">
          <img
            className='img'
            src={props.imgUrl} 
          />
        </a>
      </div>
      <div className='flex__spaceBet flex__center'>
      <a href="/acheterunvelo">
       <p className='veloItem__title'>{props.title}</p>
      </a>
        {props.isHeartOn&&(
          <>
            {isFav?
                <AiFillHeart fontSize={27} style={{cursor:"pointer"}} onClick={handleChange} color="var(--main-red)" />:
                <AiOutlineHeart fontSize={27} style={{cursor:"pointer"}} onClick={handleChange} color="var(--main-red)" />
          }
          </>
        )}
      </div>
      <p className='veloItem__price'>{props.price}</p>
      <div className='tags__wrapper'>
         {props.tags.map((item,i)=>{
          return(
            <div className='tag' key={i}>{item}</div>
          )
         })}
      </div>
    </div>
  )
};

export default VeloItem;
