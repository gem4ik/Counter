import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type SuperInputPropsType = {
    callBack: (newValue: number) => void
    value: number
    onKeyDownCallBack?: (key: string) => void

}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              onKeyDownCallBack,
                                                              value, callBack, ...restProps
                                                          }) => {

    const [superInputValue, setSuperInputValue] = useState<number>(value)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.valueAsNumber)
        setSuperInputValue(e.currentTarget.valueAsNumber)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDownCallBack && onKeyDownCallBack(e.key)
    }
    return (
        <input type={"number"} value={superInputValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
    );
};

