import { Link, useParams } from "react-router-dom";

export default function EditaContato(){
    const { id } = useParams()
    return(
        <div>
            Edição do contato: { id }

            <div>
                <li><Link to='/'>Home</Link></li>
            </div>
        </div>
    )
}