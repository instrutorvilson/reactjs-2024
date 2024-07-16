import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cadastro'>Cadastro</Link></li>
                    <li><Link to='/consulta'>Consulta</Link></li>
                    <li><Link to='/login'>Logar</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}