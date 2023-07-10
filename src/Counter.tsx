import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterReducerType, incrementAC, initialStateType, resetAC} from "./Redux/CounterReducer";
import {SuperButton} from "./SuperButton";

export const Counter = () => {

    const dispatch = useDispatch()
    const state = useSelector<CounterReducerType, initialStateType>(state => state)

    const incrementButtonHandler = () => {
        dispatch(incrementAC())
    }

    const resetButtonHandler = () => {
        dispatch(resetAC())
    }

    return (
        <div>
            <div>
                {state.counter}
            </div>
            <SuperButton
                callBack={incrementButtonHandler}
                name={"inc"}
                disable={state.counter>=state.maxValue}
            />
            <SuperButton
                callBack={resetButtonHandler}
                name={'res'}
                disable={state.counter<=state.minValue}
            />
        </div>
    );
};