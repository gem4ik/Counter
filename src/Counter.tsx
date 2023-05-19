import {FC} from "react";
import './Counter.css'

type PropsType={
    count: number
    maxValue: number
}
export const Counter: FC<PropsType> =(props)=> {
    return(
        <div className={(props.count === props.maxValue) ? 'error' : 'count'}>
           {props.count}
        </div>
    )
}