import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/usuario/registrar'>Novo usuario</Link></li>
                    <li><Link to='/usuario/login'>Login</Link></li>
                    <li><Link to='/contato/cadastrar'>Novo contato</Link></li>
                    <li><Link to='/contato/consultar'>listar contatos</Link></li>
                </ul>
            </nav>
            <main>
               
            </main>
        </div>
    )
}