import React from 'react';

const Button = (props) =>{
  const styleObject={
    background:props.color,
    color:`${props.isBlack?"black":"white"}`,
    fontWeight:props.fontWeight||500,
    fontFamily:"var(--font-base)",
    letterSpacing: "0.04em",
    lineHeight: "28px",
    fontSize: props.fontSize,
    padding: ".81rem 1.5rem",
    borderRadius: `${props.borderRadius?props.borderRadius:"none"}`,
    border: "none",
    outline: "none",
    cursor: "pointer",
    width:props.width,
    height:props.height
  }
  console.log(props)
  return(
  <div className='button_comp flex__center'>
    <button style={styleObject}> 
    {props.title}
    </button>
  </div>
)};

export default Button;

