import { useReducer } from "react"

const initialState = {
    contador: 0,
}

type actionType = 
 | {type: 'incrementar'}
 | {type: 'decrementar'}
 | {type: 'custom', payload:number}

const contadorReducers = (state: typeof initialState, action: actionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
            case 'decrementar':
                return {
                    ...state,
                    contador: state.contador - 1
                }
                case 'custom':
                    return {
                        ...state,
                        contador: action.payload
                    }

        default:
            return state;
    }
}



const ContadorReduacer = () => {
    
    const [state, dispatch] = useReducer(contadorReducers, initialState);
    return (
        <div>
           <small>Contador {state.contador}</small> 
           <br/>
           <button className="btn btn-primary" onClick={()=> dispatch({type: 'incrementar'})}>+1</button>
           <button className="btn btn-primary" onClick={()=> dispatch({type: 'decrementar'})}>-1</button>
           <button className="btn btn-primary" onClick={()=> dispatch({type: 'custom', payload: 100})}>+100</button>
        </div>
    )
}

export default ContadorReduacer
