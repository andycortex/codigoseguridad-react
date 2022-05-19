import React, { useEffect, useState } from 'react'

function UseState({name}) {
    const SECURITY_CODE = 'paradigma';
    const [value, setValue] = useState('');
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    useEffect(() => {
        if(!!loading) {
            setTimeout(() => {
                if (value === SECURITY_CODE) {
                    //setLoading(false);
                    setConfirmed(true);
                }else {
                    setError(true);
                    setLoading(true);
                }
            }, 3000);
        }
    }, [loading])
    if(!active && !confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                
                {(error && !loading)&& (
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
                <button onClick={() => {
                    setLoading(true)
                    setError(false)
                }}>Comprobar Loading</button>
            </div>
        );
    }else if(!!confirmed && !active) {
        return (
        <>
            <p>Pedimos confirmacion</p>
            <button onClick={() => setActive(true)}>Borrar</button>
            <button onClick={() => setConfirmed(false)}>Confirmar</button>
        </>)
    }else {
        return (
            <>
                <p>Eliminacion con exito</p>
                <button onClick={() => 
                    {
                        setConfirmed(false)
                        setActive(false)
                        setValue('')
                    }}>Resetear</button>
            </>)
        }
}

export { UseState };