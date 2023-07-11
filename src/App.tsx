import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import React, {useState} from "react";
import {SuperButton} from "./SuperButton";
import {LSSetValueAC} from "./Redux/CounterReducer";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch()

    const [show, setShow]=useState(true)
    const setButtonHandler =()=> {
        setShow(!show)
        if (!show) {
            dispatch(LSSetValueAC())
        }
    }

    return (
        <div>
            {show && <Counter/>}
            {!show && <Settings/>}
            <SuperButton callBack={setButtonHandler} name={'set'}/>
        </div>
    )
}

export default App;