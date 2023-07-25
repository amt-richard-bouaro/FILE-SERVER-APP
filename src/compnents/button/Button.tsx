import { CSSProperties, useEffect } from "react";

// import {} from 'react'
type buttonPropTypes = {
    id: string;
    style?: CSSProperties;
  text?: string;
    type?: string;
    className: string;
  onClick?: () => void;
  form?: string
    disabled?:boolean
}
function Button(props: buttonPropTypes) {
  
useEffect(() => {

}, [])

  return (
      <button id={props.id} onClick={props.onClick} style={props.style} className={props.className} form={props.form} disabled={props.disabled}>{props.text || 'button' }</button>
  )
}

export default Button