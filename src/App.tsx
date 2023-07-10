import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {SuperButton} from "./SuperButton";
import {useState} from "react";

function App() {

    const [show, setShow]=useState(true)
    const setButtonHandler =()=> {
        setShow(!show)
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