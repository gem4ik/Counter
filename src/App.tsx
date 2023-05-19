import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Buttons";

function App() {
  const [count, setCount] = useState(0)
  const maxValue = 5
  const minValue = 0
  const Increment = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  }
  const Reset = () => {
    setCount(minValue)
  }
  return (
      <div className="App">
        <div className='counter'>
          <Counter
              count={count}
              maxValue={maxValue}
          />
        </div>
        <div className='button'>
          <Button
              name='increment'
              Increment={Increment}
              maxValue={maxValue}
              count={count}
          />
          <Button
              name='reset'
              Reset={Reset}
              minValue={minValue}
              count={count}
          />
        </div>
      </div>
  )
}

export default App;