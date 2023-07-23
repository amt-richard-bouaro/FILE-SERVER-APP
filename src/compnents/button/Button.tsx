import { CSSProperties } from "react";

// import {} from 'react'
type buttonPropTypes = {
    id: string;
    style?: CSSProperties;
  text?: string;
    type?: string;
    className: string;
  onClick?: () => void;
    form?:string
}
function Button(props:buttonPropTypes) {
  return (
      <button id={props.id} onClick={props.onClick} style={props.style} className={props.className} form={props.form}>{props.text || 'button' }</button>
  )
}

export default Button