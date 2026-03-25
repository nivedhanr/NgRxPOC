import { createReducer , on} from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";
import { initialSate } from "./counter.state";

export const counterReducer = createReducer(
    initialSate,
    on(increment, (state:any)=>({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, (state:any)=>({
        ...state,
        counter: state.counter -1
    })),
    on(reset, (state:any)=>({
        ...state,
        counter: 0
    }))
)