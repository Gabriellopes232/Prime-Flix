import { Link } from "react-router-dom"
import { HeaderSite } from "./style"

export default function Header() {
    return (
        <HeaderSite>
            <Link to='/' replace><a>PrimeFlix</a></Link>
            <Link to='/favoritos'><a>Meus Filmes</a></Link>
        </HeaderSite>
    )
}
