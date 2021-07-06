import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

type Arg = {
    milisegundos:number
}

const Timer = ({milisegundos}: Arg ) => {


    const [segundos, setSegundos] = useState<number>(0)

    const ref = useRef<NodeJS.Timeout>();
    useEffect(() => {
        
        ref.current && clearInterval( ref.current )
        ref.current = setInterval(()=> setSegundos(s => s + 1), milisegundos)
        
    }, [milisegundos])

    return (
        <>
            <br/>
          {segundos}  
        </>
    )
}

export default Timer
