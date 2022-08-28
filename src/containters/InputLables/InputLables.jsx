import React from 'react';
import { Button } from '../../components';
import "./InputLables.css"
const ModifierCompte = (props) =>{

  return(
  <div className='modifier_compte_wrapper'>
            <form className="updateinfo_form" onSubmit={e=>{e.preventDefault()}}>
                <div className="text_inputs">
                    {props.inputs.map((item,i)=><input placeholder={item.placeholder} name={item.name} type={item.type} key={i} />)}
                </div>
                <Button 
                 title={props.btnTitle}
                 color="#06B2F8" 
                 width="18rem"
                 height="5.1rem"
                 fontSize="27px"
                 borderRadius={false}
                />
            </form>
  </div>
)};

export default ModifierCompte;