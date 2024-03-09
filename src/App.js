import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
           <h1 className="text-center">Nossa Agenda</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cadastro'>Cadastro</Link></li>
                    <li><Link to='/consulta'>Consulta</Link></li>
                </ul>
            </nav>
            <main>
               <Outlet />
            </main>            
        </div>
  );
}

export default App;
