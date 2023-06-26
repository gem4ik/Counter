import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Buttons";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {
    CounterStateType,
    IncrementAC, IncrementLCAC,
    OnChangeMaxHandlerAC,
    OnChangeMinHandlerAC,
    ResetAC
} from "./Store/counterReducer";
import {ActionType} from "./Store/Store";

function App() {

    const dispatch = useDispatch()
    const state = useSelector<ActionType, CounterStateType>(store => store)

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const Increment = () => {
        dispatch(IncrementAC())

    }
    const Reset = () => dispatch(ResetAC())
    const OnChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(OnChangeMaxHandlerAC(e.currentTarget.valueAsNumber))
    }
    const OnChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(OnChangeMinHandlerAC(e.currentTarget.valueAsNumber))
    }

    const MaxValueSetter = () => localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    const MinValueSetter = () => localStorage.setItem('minValue', JSON.stringify(state.minValue))


    useEffect(() => {
        const savedCount = localStorage.getItem('count');
        if (savedCount !== null) {
            dispatch(IncrementLCAC(Number(savedCount)));
        }
        const savedMaxValue = localStorage.getItem('maxValue');
        if (savedMaxValue !== null) {
            dispatch(OnChangeMaxHandlerAC(Number(savedMaxValue)));
        }
        const savedMinValue = localStorage.getItem('minValue');
        if (savedMinValue !== null) {
            dispatch(OnChangeMinHandlerAC(Number(savedMinValue)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(state.count));
    }, [state.count]);

    return (
        <div className="App">
            <div>
                <div className='counter'>
                    <div className={(state.count === state.maxValue) ? 'error' : 'count'}>
                        {state.count}
                    </div>
                </div>
                <div className='button'>
                    <Button
                        disabled={state.maxValue === state.count}
                        name='increment'
                        OnClickHandler={Increment}
                    />
                    <Button
                        disabled={state.minValue >= state.count}
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
                        <Input
                            callBack = {OnChangeMaxHandler}
                            value = {state.maxValue}
                        />
                        <Button
                            OnClickHandler={MaxValueSetter}
                            name={'max Value'}
                            disabled={state.maxValue <= state.minValue}/>

                    </div>
                    <div>
                        <Input
                            callBack ={OnChangeMinHandler}
                            value = {state.minValue}
                        />
                        <Button
                            buttonClasses={state.minValue < 0 ? 'buttonError' : ''}
                            disabled={state.minValue < 0 || state.maxValue <= state.minValue}
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





// useEffect(() => {
//     if (state.count) {
//         localStorage.setItem('count', JSON.stringify(state.count))
//     }
// }, [state.count])
// useEffect(() => {
//
//     const count = localStorage.getItem('count')
//     const savedMaxValue = localStorage.getItem('maxValue')
//     const savedMinValue = localStorage.getItem('minValue')
//
//     if (savedMinValue) {
//         // setMinValue(JSON.parse(savedMinValue))
//     }
//     if (savedMaxValue) {
//         // setMaxValue(JSON.parse(savedMaxValue))
//     }
//     if (count) {
//         // setCount(JSON.parse(count))
//     }
// }, [])