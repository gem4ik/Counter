import React from 'react';
type SuperButtonPropsType = {
    callBack: () => void
    name: string
    disable?: boolean
}



export const SuperButton = (props:SuperButtonPropsType) => {
   const {callBack, name, disable} = props

    const onClickHandler = () => {
        callBack()
    }
    return (
       <button onClick={onClickHandler} disabled={disable}>{name}</button>
    );
};

