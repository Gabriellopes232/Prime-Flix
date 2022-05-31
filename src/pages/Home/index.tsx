import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export default function Home() {
    const [filmes, setFilmes] = useState([]);

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
            console.log(response)
        }
        loadFilmes()
    }, [])
    return (
        <div>
            <h1>
                Bem vindo a Home
            </h1>
        </div>
    )
}
