import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterReducerType, initialStateType, MaxValueAC, StartValueAC} from "./Redux/CounterReducer";
import {SuperInput} from "./SuperInput";



export const Settings = () => {

    const dispatch = useDispatch()
    const state = useSelector<CounterReducerType, initialStateType>(state => state)

    const setStartValue = (newValue: number) => {
        dispatch(StartValueAC(newValue))
    }
    const setMaxValue = (newValue: number) => {
        dispatch(MaxValueAC(newValue))
    }

    return (
        <div>
            <SuperInput
                callBack={setStartValue}
                value={state.minValue}/>
            <SuperInput
                callBack={setMaxValue}
                value={state.maxValue}/>
        </div>
    );
};