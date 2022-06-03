import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { api } from '../../services/api'

export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "84932e9c944ef8b57e5cff1ea6cf3590",
                    language: "pt_BR",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                })
                .catch(() => {

                })
        }
        loadFilme()
    }, [])
    return (
        <div>Bem vindo a pagina de filmes</div>
    )
}
