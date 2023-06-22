export type CounterStateType = {
    count: number
    maxValue: number
    minValue: number
}
export const counterState = {
    count: 0,
    maxValue: 5,
    minValue: 0,
}

export const CounterReducer = (state: CounterStateType = counterState, action: TsarType): CounterStateType => {
    switch (action.type) {
        case 'INCREMENT': {
            if (state.count < state.maxValue) {
                return {
                    ...state,
                    count: state.count + 1
                }
            } else {
                return {
                    ...state,
                    count: state.count
                }
            }
        }
        case "RESET": {
            return {
                ...state,
                count: state.minValue
            }
        }
        case "ON-CHANGE-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.payload.e
            }
        }
        case "ON-CHANGE-MIN-VALUE": {
            return {
                ...state,
                minValue: action.payload.e
            }
        }
        case "INCREMENT-FROM-LC": {
            return {...state,
            count: action.payload.savedCount}
        }
        default: return state
    }
};

type TsarType = IncrementACType
    | ResetACType
    | OnChangeMaxHandlerACType
    | OnChangeMinHandlerACType
    | IncrementLCACType

export type IncrementACType = ReturnType<typeof IncrementAC>
export const IncrementAC = () => {
    return {
        type: 'INCREMENT'
    } as const
}

export type IncrementLCACType = ReturnType<typeof IncrementLCAC>
export const IncrementLCAC = (savedCount: number) => {
    return {
        type: 'INCREMENT-FROM-LC',
        payload: {savedCount}
    } as const
}


export type ResetACType = ReturnType<typeof ResetAC>
export const ResetAC = () => {
    return {
        type: 'RESET'
    } as const
}

export type OnChangeMaxHandlerACType = ReturnType<typeof OnChangeMaxHandlerAC>
export const OnChangeMaxHandlerAC = (e: number) => {
    return {
        type: 'ON-CHANGE-MAX-VALUE',
        payload: {e}
    } as const
}
export type OnChangeMinHandlerACType = ReturnType<typeof OnChangeMinHandlerAC>
export const OnChangeMinHandlerAC = (e: number) => {
    return {
        type: 'ON-CHANGE-MIN-VALUE',
        payload: {e}
    } as const
}