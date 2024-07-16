import { useContext, useState } from "react"
import UserContext from "../contextos/loginContext"

export default function Login(){
    const [email, setEmail] = useState('')
    const {user, atualizarLogin} = useContext(UserContext)
    return(
        <div>
            <label htmlFor="email">Informe email</label>
            <input id="email" type="email" placeholder="informe email" value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={() => atualizarLogin(email)}>Logar</button>
            <p>Usuario conectado: {user.nome}</p>
            <p>Usuario conectado: {user.email}</p>
        </div>
    )
}