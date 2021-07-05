import React from 'react'
import { useState } from 'react'

//Lo recomendable es crear una carpeta para las interfaces
interface User {
    name: string,
    edad: number
}

const Usario = () => {

    // Tipado generico
    const [user, setUser] = useState<User>();

    const handleUser = ():void => {
        setUser({
            name: 'Vladimir',
            edad: 20
        })
    }
    return (
        <div className="mt-5">
            <h3>User : useState</h3>
            <button
                onClick={ handleUser }
                className="btn btn-outline-success"
            >Ver user</button>
            <pre className="mt-3">{
                    (!user) 
                    ? <p>No hay usario</p>
                    : JSON.stringify(user)
                }</pre>
        </div>
    )
}

export default Usario
