import React from "react";
import { Button } from "../../components";
import { galleryImages } from "../../constants/data";
import {FaPhoneAlt,FaHeart,FaPlusCircle,FaUser} from "react-icons/fa"
import "./ItemLable.css"

const ItemLable=()=>{
    const [selectedImg,setSelectedImg]=React.useState(galleryImages[0])
    /* const handelClick=()=>{
        setSelectedImg(img)
    } */
    return(
        <div className="app__ItemLable__wrapper">
            <div className="app__ItemLable_header">
                    <p className="p__oswald">Vélo &gt; Mountin Bike &gt; Cannondale </p>
                    <hr style={{marginBlock:"1.2rem",height:"1.2px"}}/>
                </div>
          <div className="sidesWrapper">
          <div className="app__left_side">
                <div className="app__ItemLable_garllery_wrapper">
                    <div className="app__ItemLable_garllery_selectedImg">
                        <img src={selectedImg}
                            alt="selectedImg"
                        />
                    </div>
                    <div className="app__ItemLable_garllery_pics">
                        {galleryImages.map((img,i)=> <img src={img} key={i} alt="small_Img" onClick={()=>{setSelectedImg(img)}} />)}
                    </div>
                    <div className="app__ItemLable_ItemDisc">
                        <h1 className="table_headerText">caractéristiques</h1>
                        <div className="app__ItemLable_ItemDisc-table">
                            <div className="table_cell"><p className="carateristique">Matier</p> <p className="detail">Matier</p></div><hr/>
                            <div className="table_cell"><p className="carateristique">Etat</p> <p className="detail">Matier</p></div><hr/>
                            <div className="table_cell"><p className="carateristique">Vitesses Plateau</p> <p className="detail">Matier</p></div><hr/>
                            <div className="table_cell"><p className="carateristique"> Taille Cadre </p> <p className="detail">Matier</p></div><hr/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app__right_side">
                    <div className="lable_cardInfo">
                    <h1 className="app__right_side-ItemTextHeader">Stana cruz broson<br/>2018</h1>
                    <div className="app__right_side-iconsContainer">
                        <p> Taille M </p>
                        <p> Carbon  </p>
                        <p> Shemano </p>
                    </div>
                    <div className="priceTitle">
                         <p> 2350 DT</p>
                    </div>
                    <div className="app__right_side-buttonsContainer flex__center">
                        <Button 
                            title={<p className='flex__center'><FaPhoneAlt fontSize={24} style={{marginRight:".81rem"}} />Contacter </p>}
                            color="#06B2F8" 
                            width="10rem"
                            fontSize="16px"
                            borderRadius="30px"
                        />
                        <Button 
                            title={<p className='flex__center'><FaHeart fontSize={24} style={{marginRight:".81rem"}} />Enregistrer </p>}
                            color="#FF4C65" 
                            width="10rem"
                            fontSize="16px"
                            borderRadius="30px"
                        />
                    </div>
                    <div style={{margin:".81rem"}}>
                        <a href="">
                            <Button
                            title={<p className='flex__center'><FaUser color="black" style={{marginRight:".81rem"}}/>  Montassar Trojette <FaPlusCircle fontSize={24} color="#FF4C65" style={{marginLeft:".81rem"}} /></p>}
                            isBlack={true}
                            color="#f3f3f3" 
                            width="20.7rem"
                            fontSize="16px"
                            borderRadius="30px" 
                           />
                        </a>
                    </div>
                    </div>
            </div>
          </div>
        </div>
    )
}
export default ItemLable;
