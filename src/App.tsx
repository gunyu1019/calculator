import './App.scss';

import OperationButton from "./components/OperationButton"
import Container from "react-bootstrap/Container";
import NumericButton from "./components/NumericButton";
import {add_numeric, add_operation, add_point, calculate} from "./reducers/calculator";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./reducers";

function App() {
    const calculator_value = useSelector((state: RootState) => state.calculator.text);
    const dispatch = useDispatch();

    const onAddNumeric = (value: number) => {
        dispatch(add_numeric(value))
    }
    const onAddOperation = (value: string) => {
        dispatch(add_operation(value))
    }
    const onCalculate = () => {
        dispatch(calculate())
    }
    const onAddPoint = () => {
        dispatch(add_point())
    }

    return (
        <div className="main">
            <Container>
                <p>{calculator_value}</p>
                <div className={"btn_group"}>
                    <button className={"btn_init"}>AC</button>
                    <button className={"btn_init"}>←</button>
                    <button className={"btn_init"}>%</button>
                    <OperationButton value="÷" onAddOperation={onAddOperation}/>
                </div>
                <div className={"btn_group"}>
                    <NumericButton onAddNumeric={onAddNumeric} value={7}/>
                    <NumericButton onAddNumeric={onAddNumeric} value={8}/>
                    <NumericButton onAddNumeric={onAddNumeric} value={8}/>
                    <OperationButton value={"×"} onAddOperation={onAddOperation}/>
                </div>
                <div className={"btn_group"}>
                    <NumericButton onAddNumeric={onAddNumeric} value={4}/>
                    <NumericButton onAddNumeric={onAddNumeric} value={5}/>
                    <NumericButton onAddNumeric={onAddNumeric} value={6}/>
                    <OperationButton value={"-"} onAddOperation={onAddOperation}/>
                </div>
                <div className={"btn_group"}>
                    <NumericButton onAddNumeric={onAddNumeric} value={1}/>
                    <NumericButton onAddNumeric={onAddNumeric} value={2}/>
                    <NumericButton onAddNumeric={onAddNumeric} value={3}/>
                    <OperationButton value={"+"} onAddOperation={onAddOperation}/>
                </div>
                <div className={"btn_group"}>
                    <NumericButton onAddNumeric={onAddNumeric} className={"btn_2column"} value={0}/>
                    <button onClick={onAddPoint}>.</button>
                    <button className={"btn_operator"} onClick={onCalculate}>=</button>
                </div>
            </Container>
        </div>
    );
}

export default App;