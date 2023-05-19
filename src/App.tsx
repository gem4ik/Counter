import React, {useState} from 'react';
import './App.css';
import {Button} from "./Buttons";

function App() {
    const [count, setCount] = useState<number>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const minValue = 0
    const maxValue = 5

    const Increment = () => {
        count < maxValue ? setCount(count + 1) : setCount(count)
    }
    const Reset = () => {
        setCount(minValue)
    }
    const ShowSetter = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <div className='counter'>
                <div className={(count === maxValue) ? 'error' : 'count'}>
                    {count}
                </div>
            </div>
            <div className='button'>
                <Button
                    disabled = {maxValue === count}
                    name='increment'
                    OnClickHandler={Increment}
                />
                <Button
                    disabled = {minValue === count}
                    name='reset'
                    OnClickHandler={Reset}
                />
                <Button
                    name={'set'}
                    // count={count}
                    OnClickHandler={ShowSetter}
                />
            </div>
            <div className='setter'>
                {collapsed || <div className='setter'>
                    <div>
                        <input type='number'/>
                        <Button name={'max Value'} count={0}/>
                    </div>
                    <div>
                        <input type='number'/>
                        <Button name={'min Value'} count={0}/>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default App;