import './Button.css'
import {FC} from "react";

type PropsType = {
    name: string
    Increment?: () => void
    Reset?: () => void
    minValue?: number
    maxValue?: number
    count: number
}
export const Button: FC<PropsType> = (
    {
        name,
        Increment,
        Reset,
        minValue,
        maxValue,
        count
    }) => {
    const OnClickHandler = () => {
        Increment && Increment()
        Reset && Reset()
    }

    return (
        <button
            disabled={
                maxValue === count || minValue === count
            }
            className='button'
            onClick={OnClickHandler}
        >{name}</button>
    )
}