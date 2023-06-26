import {createStore} from "redux";
import {CounterReducer} from "./counterReducer";


export type ActionType = ReturnType<typeof CounterReducer>

export const store = createStore(CounterReducer)