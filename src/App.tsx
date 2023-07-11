import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import React, {useState} from "react";
import {SuperButton} from "./SuperButton";
import {CounterReducerType, initialStateType, LSSetValueAC} from "./Redux/CounterReducer";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const state = useSelector<CounterReducerType, initialStateType>(state => state)

    const [show, setShow]=useState(true)

    const setButtonHandler =()=> {
        setShow(!show)
        if (!show) {
            dispatch(LSSetValueAC())
        }
    }

    const disableButton = (state.maxValue <= 0)
        || (state.minValue < 0)
        || (state.maxValue < state.minValue)
        || (state.maxValue === state.minValue)

    return (
        <div>
            {show && <Counter />}
            {!show && <Settings />}
            <SuperButton
                callBack={setButtonHandler}
                name={'set'}
                disable={disableButton}
            />
        </div>
    )
}

export default App;