

type NumericButtonProp = {
    value: number
    className?: string
    onAddNumeric: CallableFunction
}

function NumericButton(prop: NumericButtonProp) {
    if (prop.className === null) {
        return (<button onClick={() => prop.onAddNumeric(prop.value)}>{prop.value}</button>)
    }
    return (<button onClick={() => prop.onAddNumeric(prop.value)} className={prop.className}>{prop.value}</button>)
}


export default NumericButton;