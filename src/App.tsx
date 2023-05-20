import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Buttons";

function App() {
    const savedMaxValue = JSON.parse(localStorage.getItem('maxValue') ?? '')
    const savedMinValue = JSON.parse(localStorage.getItem('minValue') ?? '')
    const [count, setCount] = useState<any>(savedMinValue)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(savedMaxValue)
    const [minValue, setMinValue] = useState<number>(savedMinValue)

    const Increment = () => {
        count < maxValue ? setCount(count + 1) : setCount(count)
    }
    const Reset = () => {
        setCount(minValue)
    }
    const ShowSetter = () => {
        setCollapsed(!collapsed)
    }
    const OnChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
    }
    const OnChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)
    }
    const MaxValueSetter = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const MinValueSetter = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
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
                    disabled={maxValue === count}
                    name='increment'
                    OnClickHandler={Increment}
                />
                <Button
                    disabled={minValue === count}
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
                        <input type='number'
                               onChange={OnChangeMaxHandler}
                        />
                        <Button
                            OnClickHandler={MaxValueSetter}
                            name={'max Value'}/>
                    </div>
                    <div>
                        <input type='number'
                               onChange={OnChangeMinHandler}/>
                        <Button
                            OnClickHandler={MinValueSetter}
                            name={'min Value'}/>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default App;