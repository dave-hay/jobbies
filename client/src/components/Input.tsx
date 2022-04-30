import {TextField} from "@mui/material";

interface CustomInputProps {
    label: string,
    name: string,
    changeHandler: any,
    currentValue: any,
}

const Input = (props: CustomInputProps) => {


    return (
        <>
            <TextField
                sx={{width: '80%'}}
                id="outlined-basic"
                label={props.label}
                variant="outlined"
                onChange={props.changeHandler}
                name={props.name}
                margin='normal'
            />

            {/*<input*/}
            {/*    aria-label={props.label}*/}
            {/*    name={props.name}*/}
            {/*    onChange={props.changeHandler}*/}
            {/*    type={props.type}*/}
            {/*/>*/}
        </>
    )
}

export default Input;