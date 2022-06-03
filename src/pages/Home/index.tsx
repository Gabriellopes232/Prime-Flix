import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../services/api'
import { ContainerSite } from './style';

type TFilmes = {
    id: number;
    title: string;
    poster_path: string;
}

export default function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing",
                {
                    params: {
                        api_key: "84932e9c944ef8b57e5cff1ea6cf3590",
                        language: "pt_BR",
                        page: 1
                    }
                })
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }
        loadFilmes()
    }, [])

    if (loading) {
        return (
            <ContainerSite>
                <h2>Carregando filmes...</h2>
            </ContainerSite>
        )
    }
    return (
        <ContainerSite>
            <div>
                {filmes.map((filme: TFilmes) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </ContainerSite>
    )
}
