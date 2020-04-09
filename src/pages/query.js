import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Query(){

    const [teste, setTeste] = useState();

    function handleName() {
        alert(teste);
    };
    function clear(e) {
        e.preventDefault()
        alert(teste)
    };

    return(
        <>
        <h1>Hello</h1>

        <input onChange={e => setTeste(e.target.value)} type="text"/>

        <button onClick={handleName}>Clicar</button>
        <button onClick={clear}>Limpar</button>

        <Link to='/register'>TESTE</Link>
        </>
    );
};