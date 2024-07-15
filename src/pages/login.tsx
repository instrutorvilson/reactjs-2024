import { useState } from "react";
import { Link } from "react-router-dom";

interface TUser {
    nome?: string
    email: string,
    senha: string,
    perfil?: string
}

export default function Login(){
    const[email, setEmail] = useState('maria@gmail.com')
    const[senha, setSenha] = useState('123')

    function logar(){
        localStorage.removeItem('userLogado')
        fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(dados => {
            let user = dados.find((ct: TUser) =>
             ct.email == email && ct.senha == senha)
            if (user != undefined){
                localStorage.setItem('userLogado', user.email )
            }else{
                alert('Usuario ou senha inválidos')
            }
        })       
    }
    return(
        <div className="container">
            <h2 className="text-center"></h2>
            <div>
                <label htmlFor="email">Informe email</label>
                <input 
                  type="email" 
                  placeholder="Informe email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

               <label htmlFor="senha">Informe senha</label>
                <input 
                  type="password" 
                  placeholder="Informe senha"
                  className="form-control"
                  id="senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
                <button 
                  onClick={logar}
                  className="btn btn-primary"
                >Logar</button>
            </div>
            <div>
                <li><Link to='/'>Home</Link></li>
            </div>
        </div>
    )
}