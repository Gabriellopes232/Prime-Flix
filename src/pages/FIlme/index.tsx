import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { api } from '../../services/api'
import { ContainerSite } from "./style";

type Tfilme = {
    title: string;
    overview: string;
    backdrop_path: string;
    vote_average: string;
}

export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({} as Tfilme)
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
                    setFilme(response.data);
                    setLoading(false)
                })
                .catch(() => {
                    console.log('filme não encontrado')
                })
        }
        loadFilme()
    }, [])

    if (loading) {
        return (
            <div>Carregando detalhes...</div>
        )
    }
    return (
        <ContainerSite>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div>
                <button>Salvar</button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>
        </ContainerSite>
    )
}
