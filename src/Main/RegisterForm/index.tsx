import { forwardRef,memo } from "react";
import Default from "./Default";
export interface formProps {
    children?: React.ReactNode;
    formColors?: formColors;
    disableDefault?: boolean;
    elementSpacing?: elementSpacing;
    formSettings?:object;
}
export interface elementSpacing{
    m?:string;
    p?:string;
}
export interface formColors {
    bg?: string;
    color?: string;
    borderColor?: string;
    boxShadow?: string;
    rounded?:string;
    btn: string;
}

const RegisterForm = memo(forwardRef<HTMLDivElement, formProps>((props, ref) => {
    return (
        <div ref={ref}
            className={`row col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4
            bg-${props.formColors?.bg} 
            ${props.formColors?.boxShadow}
            ${props.formColors?.rounded} `}>
            <form 
            {...props.formSettings}
            className="container-fluid d-flex flex-column aling-items-center justify-content-between">
                {props.disableDefault ? null : <Default {...props} />}
                {props.children}
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <button type="submit" 
                    className={`btn 
                    btn-${props.formColors?.btn}
                    m-${props.elementSpacing?.m} 
                    p-${props.elementSpacing?.p}`}>Register</button>
                </div>

            </form>
        </div>
    );
}));

export default RegisterForm;