import React from 'react'
import { Link } from 'react-router-dom'
import { PaginaError } from './style'

export default function Error() {
    return (
        <PaginaError>
            <h1>
                404
            </h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Veja todos os filmes</Link>
        </PaginaError>
    )
}
