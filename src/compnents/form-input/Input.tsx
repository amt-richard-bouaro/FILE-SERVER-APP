import { ReactNode } from "react";

type fieldgroupPropTypes = {
    children: ReactNode;
    label: string;
    id: string;
    validationMsg?: string;
}

function FieldGroup({ children, ...rest }: fieldgroupPropTypes) {

    const { label, id, validationMsg } = rest;

    return (
        <div className="field-group mg-around">
            <label htmlFor={id} className='field-label'>{label}</label>
            {children}
            
        </div>);
}


type inputPropType = {
    name: string;
    id: string;
    placeholder?: string
    type: string;
    value?: string;
    onChange: (event:React.ChangeEvent<HTMLInputElement>)=>void;
}

function Input(props: inputPropType, ...rest: any) {
    const type = props.type || 'text';
    return (
        <input type={type} name={props.name} className='field-input ' id={props.id} placeholder={props.placeholder} value={props.value}  onChange={props.onChange}  {...rest} />
    )
}

export { Input, FieldGroup }