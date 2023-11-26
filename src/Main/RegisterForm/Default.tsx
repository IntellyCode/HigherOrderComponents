import { formProps } from ".";
import Input from "./Input";
export default function Default(props:formProps) {
    return (
        <>
            <h3 className={`text-center 
            ${props.formColors?.color}
            m-${props.elementSpacing?.m}
            p-${props.elementSpacing?.p}`}
                style={{
                    cursor: "default"
                }}>Register</h3>
            <Input 
            label="Name" 
            type="text" 
            placeholder="Name" 
            elementSpacing={props.elementSpacing}
            />
            <Input
            label="Surname"
            type="text"
            placeholder="Surname"
            elementSpacing={props.elementSpacing}

            />
            <Input
            label="Email"
            type="email"
            placeholder="Email"
            elementSpacing={props.elementSpacing}

            />
            <Input
            label="Password"
            type="password"
            placeholder="Password"
            elementSpacing={props.elementSpacing}

            />
            <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            elementSpacing={props.elementSpacing}

            />
        </>
    )
}

