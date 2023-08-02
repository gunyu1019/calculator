type OperationButtonProp = {
    value: string
    onAddOperation: CallableFunction
}

function OperationButton(prop: OperationButtonProp) {
    return (<button onClick={() => prop.onAddOperation(prop.value)} className={"btn_operator"}>{prop.value}</button>)
}


export default OperationButton;