import React, { useEffect, useState } from 'react'

function UseState({name}) {
    const SECURITY_CODE = 'paradigma';
    const [value, setValue] = useState('')
    const [error, setError] = useState(true)
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

            <input 
                type="text" 
                placeholder="Codigo de seguridad"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <button onClick={() => setError(prevState => !prevState)}>Comprobar</button>
            <button onClick={() => setLoading(true)}>Comprobar Loading</button>
        </div>
    )
}

export { UseState };