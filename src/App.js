import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
   return (
    <div className="container">
           <h1 className="text-center">Nossa Agenda</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cadastro'>Cadastro</Link></li>
                    <li><Link to='/consulta'>Consulta</Link></li>
                    <li><Link to='/consultacards'>Cards</Link></li>
                </ul>
            </nav>
            <main>
               <Outlet />
            </main> 
            <ToastContainer toastStyle={{fontSize:'14px', minHeight: '10px', borderRadius:'8px'}}/>          
        </div>
  );
}

export default App;
