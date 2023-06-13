import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Buttons";

function App() {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)

    const Increment = () => {
        if (count < maxValue) {
            setCount(count + 1)
        } else {
            setCount(count)
        }
    }
    const Reset = () => {
        setCount(minValue)
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

    useEffect(() => {
        if (count) {
            localStorage.setItem('count', JSON.stringify(count))
        }
    }, [count])

    useEffect(() => {

        const count = localStorage.getItem('count')
        const savedMaxValue = localStorage.getItem('maxValue')
        const savedMinValue = localStorage.getItem('minValue')

        if (savedMinValue) {
            setMinValue(JSON.parse(savedMinValue))
        }
        if (savedMaxValue) {
            setMaxValue(JSON.parse(savedMaxValue))
        }
        if (count) {
            setCount(JSON.parse(count))
        }
    }, [])

    return (
        <div className="App">
            <div>
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
                        disabled={minValue >= count}
                        name='reset'
                        OnClickHandler={Reset}
                    />
                    <Button
                        name={'set'}
                        OnClickHandler={() => {
                            setCollapsed(!collapsed)
                        }}
                    />
                </div>
            </div>
            <div className='setter'>
                {collapsed || <div className='setter'>
                    <div>
                        <input type='number'
                               onChange={OnChangeMaxHandler}
                        />
                        <Button
                            OnClickHandler={MaxValueSetter}
                            name={'max Value'}
                            disabled={maxValue <= minValue}/>

                    </div>
                    <div>
                        <input type='number'
                               onChange={OnChangeMinHandler}/>
                        <Button
                            buttonClasses={minValue < 0 ? 'buttonError' : ''}
                            disabled={minValue < 0 || maxValue <= minValue}
                            OnClickHandler={MinValueSetter}
                            name={'min Value'}/>
                        <Button
                            name={'set'}
                            OnClickHandler={() => {
                                setCollapsed(!collapsed)
                            }}
                        />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default App;