import { Link } from "react-router-dom";

export default function ConsultaContatos(){
    return(
        <div>
            <p>Consulta contatos</p>
            <label>Ver contato ID 2</label>
            <Link to='/contato/consultar/2'>Ver ID 2</Link>
            <div>
                <li><Link to='/'>Home</Link></li>
            </div>
        </div>
    )
}