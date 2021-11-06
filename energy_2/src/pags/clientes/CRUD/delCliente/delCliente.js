import React from 'react'
import { useParams} from 'react-router-dom';

export default function Delete(){

    const HandleClick = (event) => {
        const { numeroCliente } = useParams();
        fetch(`http://localhost:3003/sistema/cliente/${numeroCliente}`, {
            method: "delete"
        })

    }

    return(
        <div>
            <h1>O Cliente foi deletado com sucesso.</h1>
            {HandleClick()}
        </div>
    )
}