import React, {ChangeEvent} from 'react';

type InputPropsType = {
    callBack: (e: ChangeEvent<HTMLInputElement>)=>void
    value: number
}

export const Input = (props: InputPropsType) => {
    return (
        <input type='number'
               value={props.value}
               onChange={props.callBack}/>
    );
};