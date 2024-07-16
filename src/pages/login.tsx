import { useContext, useState } from "react"
import LoginContext from "../contextos/loginContext"

const Login = ()=>{
    const[nome, setNome] = useState('joao')
    const[email, setEmail] = useState('joao@gmail.com')
    const { atualizaLogin } = useContext<any>(LoginContext)
    return(
        <div>
           <label htmlFor="nome">Informe nome</label>
           <input 
               type='text' 
               placeholder="Informe nome"
               id="nome"
               value={nome}
               onChange={e => setNome(e.target.value)}
            />

          <label htmlFor="email">Informe email</label>
           <input 
               type='email' 
               placeholder="Informe email"
               id="email"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <button
               onClick={()=> atualizaLogin({nome, email})}
            >Logar</button>
        </div>
    )
}

export default Login