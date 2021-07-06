import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = ( n: number ):void => {

        setCounter(counter + n);
    }
    const refresh = ():void => {
        setCounter(0)
    }
    return (
        <div className="mt-5">
            <h3>Counter:</h3>
            <p>Valor: {counter}</p>
            <button className="btn btn-primary" onClick={ () => incrementar(1) }>+1</button>
            <button className="btn btn-primary" onClick={ () => incrementar(2) }>+2</button>
            <button className="btn btn-danger" onClick={ () => incrementar(-1) }>-1</button>
            <button className="btn btn-success"onClick={ refresh }>refresh</button>
            <hr/>
        </div>
    )
}

export default Counter
