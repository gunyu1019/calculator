import { combineReducers } from "redux";
import calculator from "./calculator";


const rootReducer = combineReducers({
    calculator
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;