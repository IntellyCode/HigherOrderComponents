import {memo} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { elementSpacing} from '.';
const Input = memo(({ label, type, placeholder, elementSpacing}:
    { label?: string, type?: string, placeholder?: string, elementSpacing?: elementSpacing}) =>{
    const id = uuidv4();
    return (
        <div className={`form-floating m-${elementSpacing?.m}`}>
            <input type={type} className="form-control" id={id} placeholder={placeholder} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
})
export default Input;