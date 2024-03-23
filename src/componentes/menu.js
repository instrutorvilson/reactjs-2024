import { Link, Outlet } from "react-router-dom";

export default function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='componente1'>Componente 1</Link></li>                  
                   { 
                      localStorage.getItem('userLogado') !== null &&
                        <>
                        <li><Link to='componente2'>Componente 2</Link></li> 
                        <li><Link to='componente3'>Componente 3</Link></li> 
                       </>                   
                   }
                    
                    <li><Link to='cadastro'>Cadastro</Link></li>
                    <li><Link to='login'>Login</Link></li>
                </ul>

            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}