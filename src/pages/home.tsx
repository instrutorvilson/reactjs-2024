import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    const [isLogged, setIslogged] = useState<boolean>()
    useEffect(()=>{
        setIslogged(localStorage.getItem('userLogado') != null)

    },[isLogged])
    
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/usuario/registrar'>Novo usuario</Link></li>
                    <li><Link to='/usuario/login'>Login</Link></li>
                    {
                        /**renderização condicional */
                        isLogged ? <>
                            <li><Link to='/contato/cadastrar'>Novo contato</Link></li>
                            <li><Link to='/contato/consultar'>listar contatos</Link></li>  
                            </>
                            : ""       
                            
                    }
                </ul>
            </nav>
            <main>
               <Outlet />
            </main>
        </div>
    )
}