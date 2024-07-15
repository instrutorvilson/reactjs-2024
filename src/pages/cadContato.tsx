import { Link } from "react-router-dom";

export default function CadContato(){
    return(
        <div>
            <p>novo contato</p>
            <div>
                <li><Link to='/'>Home</Link></li>
            </div>
        </div>       
    )
}