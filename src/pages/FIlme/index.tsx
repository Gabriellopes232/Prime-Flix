import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { api } from '../../services/api'
import { ContainerSite } from "./style";

type Tfilme = {
    id: string;
    title: string;
    overview: string;
    backdrop_path: string;
    vote_average: string;
}

export default function Filme() {
    const { id } = useParams()
    const navigate = useNavigate()
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
                    navigate('/', { replace: true })
                    return;
                })
        }
        loadFilme()
    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix") || '{}';

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo: { id: string; }) => filmesSalvo.id === filme.id)

        if (hasFilme) {
            alert("ESSE FILME JÁ ESTA NA LISTA");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        alert("FILME SALVO COM SUCESSO")

    }
    if (loading) {
        return (
            <div>Carregando detalhes...</div>
        )
    }
    return (
        <ContainerSite>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="imagem do filme" />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external noreferrer" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </ContainerSite>
    )
}
