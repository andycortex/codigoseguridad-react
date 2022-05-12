import React, { useEffect, useState } from 'react'

function UseState({name}) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [loading])
    
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            
            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>Cargando el error</p>
            )}

            <input type="text" placeholder="Codigo de seguridad"/>
            <button onClick={() => setError(prevState => !prevState)}>Comprobar</button>
            <button onClick={() => setLoading(true)}>Comprobar Loading</button>
        </div>
    )
}

export { UseState };