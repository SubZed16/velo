import React from 'react';
import "./SidebarElem.css"
const SidebarElem = ({state}) =>{

  return(
  <div className='SidebarElem__wrapper'>
    <a href="/troispagePage/vendrevelo"><p className={`${state==="/vendrevelo"?"selected_p_elm flex__center":""}  `} >Vendre vélo</p></a>
    <a href="/troispagePage/mesfav"><p className={`${state==="/mesfav" ?"selected_p_elm flex__center":""} `} >Mes favoris</p></a>
    <a href="/troispagePage/modifiercompte"><p className={`${state==="/modifiercompte"?"selected_p_elm flex__center":""}  `} >Modifier compte</p></a>
  </div>
)};

export default SidebarElem;