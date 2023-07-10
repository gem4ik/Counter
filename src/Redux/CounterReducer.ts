
export type initialStateType = {
    counter: number
    minValue: number
    maxValue: number
}

export const initialState = {
    counter: 0,
    minValue: 0,
    maxValue: 5
}

export type CounterReducerType = ReturnType<typeof counterReducer>
export const counterReducer = (state: initialStateType = initialState, action: MainType): initialStateType => {
    switch (action.type) {
        case "INCREMENT": {
            return {...state, counter: state.counter+1}
        }
        case "RESET": {
            return {...state, counter: state.minValue}
        }
        case "SET-START-VALUE": {
            return {...state, minValue: action.payload.newValue}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.payload.newValue}
        }
        default: return state
    }
}

export type MainType = IncrementACType | resetACType | StartValueACType | MaxValueACType

export type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => {
    return{
        type:"INCREMENT"
    } as const
}
export type resetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: "RESET"
    } as const
}
export type StartValueACType = ReturnType<typeof StartValueAC>
export const StartValueAC = (newValue: number) => {
    return {
        type: "SET-START-VALUE",
        payload: {newValue}
    } as const
}
export type MaxValueACType = ReturnType<typeof MaxValueAC>
export const MaxValueAC = (newValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        payload: {newValue}
    } as const
}