import React from 'react';
import images from "../../constants/images"
import Button from '../Button/Button';
import {AiOutlineUser,AiOutlineHeart,AiFillPlusCircle,AiOutlineSearch,AiOutlinePlus, AiOutlineUserSwitch} from "react-icons/ai"
import {FaUser} from "react-icons/fa"

import './Navbar.css';

const Navbar = (props) => {
  const [styleObjet,setStyleObjet]=React.useState({})
  const handleChange=e=>{
    if(e.target.textLength>=1){
      setStyleObjet({width:"240px"})
    }else{
      setStyleObjet({})
    }

  }
  const [progessState,setProgressState]=React.useState(window.location.href.slice(window.location.href.lastIndexOf("/")+1))
  console.log(progessState)
  return (
    <div className='navBar' style={props.isFliped?{color:"black",background:"white",marginBottom:"1.8rem",borderBottom:"3px solid #12121254"}:{color:"white"}}>
    <div className='navBar__logo'>
      <a href='/'>
      <img src={images.logo}
        alt="logo "/>
      </a>
    </div>
    <div className='navBar__links_wrapper'>
      <ul className='navBar__links'>
        <li><a href="/searchsection" className='p__oswald'> Vélo</a></li>
        <li><a href="/searchsection" className='p__oswald'> Composant</a></li>
        <li><a href="/searchsection" className='p__oswald'> Accessories</a></li>
        <li><a href="/searchsection" className='p__oswald'> Équipement</a></li>
        <li><a href="/cercuitsection" className='p__oswald'> Cércuit</a></li>
      </ul>
    </div>
    <div className='navBar__input-search'>
      <div className={`flex__center ${props.isFliped?'search__box_alt':'search__box'}`} style={styleObjet}>
        <AiOutlineSearch fontSize={24}/>
        <input type="input" placeholder="Chercher une vélo" onChange={handleChange} />
      </div>
    </div>
    <div className="navBar__fliping-btn"
         onClick={()=>{}}
    >
      {
        props.isFliped?
        <div className="navBar__incons">
          {props.isReactShit&&(<a href="/troispagePage/modifiercompte" > <FaUser/> </a>)}
          {props.isMulty &&  (
            <>
            <a href="/troispagePage/modifiercompte" > <AiOutlineUser/> </a>
            <a href="/troispagePage/mesfav" > <AiOutlineHeart/> </a>
            <a href="/troispagePage/vendeervelo" > <AiFillPlusCircle/> </a>
            </>
          )
            
          }
        </div>
        :
        <div className="navBar__btn">
          <a href='#deposervélo'>
            <Button title={<p className='flex__center'><a href="/creationdecompte">Déposer une vélo</a>  <AiOutlinePlus fontSize={24} style={{marginLeft:".81rem"}} /></p>} color="#06B2F8" fontSize="16px" borderRadius="6px" />
            
          </a>
        </div>
      }
    </div>
  </div>
)};

export default Navbar;
