import { useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";


export default function CadContato(){
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('userLogado') == null){
            navigate('/usuario/login')
        }
    },[])

    return(
        <div>
            <p>novo contato</p>
            <div>
                <li><Link to='/'>Home</Link></li>
            </div>
        </div>       
    )
}