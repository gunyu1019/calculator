import {Simulate} from "react-dom/test-utils";
import ended = Simulate.ended;
import {stat} from "fs";

const ADD_NUMERIC = "calculator/numeric" as const;
const ADD_OPERATION = "calculator/operation" as const;
const CALCULATE = "calculator/calculate" as const;
const ADD_POINT = "calculator/add_point" as const;
const RESET = "calculator/reset" as const;
const BACKSPACE = "calculator/backspace" as const;


export const add_numeric = (value: number) => ({type: ADD_NUMERIC, payload: value});
export const add_operation = (operation: string) => ({type: ADD_OPERATION, payload: operation});
export const calculate = () => ({type: CALCULATE});
export const add_point = () => ({type: ADD_POINT});
export const reset = () => ({type: RESET});
export const backspace = () => ({type: BACKSPACE});

type CalculatorState = {
    text: string; enable: boolean; usedPointer: boolean
};

const initalState: CalculatorState = {
    text: "", enable: false, usedPointer: false
};

type CalculatorAction =
    | ReturnType<typeof add_numeric>
    | ReturnType<typeof add_operation>
    | ReturnType<typeof add_point>
    | ReturnType<typeof backspace>
    | ReturnType<typeof reset>
    | ReturnType<typeof calculate>;

function calculator(state: CalculatorState = initalState, action: CalculatorAction) {
    switch (action.type) {
        case ADD_NUMERIC:
            return {text: state.text += action.payload.toString(), enable: true, usedPointer: state.usedPointer}
        case ADD_OPERATION:
            if (!state.enable && action.payload !== "-") return state
            return {text: state.text += action.payload, enable: false, usedPointer: false}
        case ADD_POINT:
            if (state.usedPointer || state.text.length == 0) return state
            return {text: state.text += ".", enable: false, usedPointer: true}
        case CALCULATE:
            if (!state.enable) return state

            let replace_str = state.text.replace(/×/gi, "*").replace(/÷/gi, "/");
            if (isNaN(eval(replace_str))) {
                return {
                    text: "", enable: false, usedPointer: false
                }
            } else if (eval(replace_str) == Infinity) {
                return {
                    text: "Infinity", enable: false, usedPointer: false
                }
            }
            return {
                text: eval(replace_str), enable: false, usedPointer: false
            }
        case BACKSPACE:
            if (state.text.length === 0) {
                return state
            }
            return {text: state.text.slice(0, -1), enable: state.enable, usedPointer: state.usedPointer && state.text.slice(-1) !== "."}
        case RESET:
            return {
                text: "", enable: false, usedPointer: false
            };
        default:
            return state
    }
}

export default calculator;