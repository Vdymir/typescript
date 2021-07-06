import { useState } from 'react'
import Timer from './Timer';

const Timerfather = () => {


    const [milisegundos, setMilisegundos] = useState<number>(1000);

    return (
        <div>
            <h2>useEffect + useRef</h2>
            <br/>
            <strong>Milisegundos</strong>

            <button className="btn btn-outline-success" onClick={() => setMilisegundos(1000)}>1000</button>
            <button className="btn btn-outline-success" onClick={() => setMilisegundos(2000)}>2000</button>
            <Timer milisegundos={milisegundos}/>
        </div>
    )
}

export default Timerfather
