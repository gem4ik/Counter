export type initialStateType = {
    counter: number
    minValue: number
    maxValue: number
}
export const initialState = {
    counter: Number(localStorage.getItem('Counter')) || Number(localStorage.getItem('StartValue')) || 0,
    minValue: Number(localStorage.getItem('StartValue')) || 0,
    maxValue: Number(localStorage.getItem('MaxValue')) || 5,
}

export type CounterReducerType = ReturnType<typeof counterReducer>
export const counterReducer = (state: initialStateType = initialState, action: MainType): initialStateType => {
    switch (action.type) {
        case "INCRЕMENT": {
            return {...state, counter: state.counter + 1}
        }
        case "RESЕT": {
            return {...state, counter: state.minValue}
        }
        case "SET-START-VALUE": {
            return {...state, minValue: action.payload.newValue}
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.payload.newValue}
        }
        case "SET-TO-START": {
            if (state.counter <= state.minValue) {
                state.counter = state.minValue
            }
            localStorage.setItem('StartValue', JSON.stringify(state.minValue))
            localStorage.setItem('MaxValue', JSON.stringify(state.maxValue))
            return state
        }
        case "SET-TO-LS-COUNTER": {
            localStorage.setItem('Counter', JSON.stringify(state.counter))
            return state
        }
        default:
            return state
    }
}

export type MainType = IncrementACType
    | resetACType
    | StartValueACType
    | MaxValueACType
    | LSSetValueACType
    | LSSetCounterACType

export type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => {
    return {
        type: "INCRЕMENT"
    } as const
}
export type resetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: "RESЕT"
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
export type LSSetValueACType = ReturnType<typeof LSSetValueAC>
export const LSSetValueAC = () => {
    return {
        type: "SET-TO-START"
    } as const
}
export type LSSetCounterACType = ReturnType<typeof LSSetCounterAC>
export const LSSetCounterAC = () => {
    return {
        type: "SET-TO-LS-COUNTER"
    } as const
}