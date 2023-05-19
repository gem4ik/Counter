import './Button.css'
import {FC} from "react";

type PropsType = {
    name: string
    count?: number
    disabled?: boolean
    OnClickHandler?: () => void
    buttonClasses?: string
}
export const Button: FC<PropsType> = (
    {
        name,
        disabled,
        OnClickHandler,
        buttonClasses
    }
) => {

    return (
        <button
            disabled={disabled}
            className={buttonClasses ? buttonClasses : 'button'}
            onClick={OnClickHandler}
        >{name}</button>
    )
}