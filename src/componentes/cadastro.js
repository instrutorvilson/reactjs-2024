import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Cadastro(){
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[fone, setFone] = useState('')

    const navigate = useNavigate()

    function salvar(){
       //objeto javascript
        let contato = {
            nome: nome,
            email: email,
            fone: fone
        }
        fetch('http://localhost:3000/contatos',
        {
          method: 'POST',
          body: JSON.stringify(contato)
        })
        //.then(response => navigate('/consulta') )  
        navigate('/consulta')    
    }
    return(
        <> 
          <h1>Cadastro</h1>
          <label className="form-label">Informe nome</label>
          <input 
             className="form-control" type="text" placeholder="informe nome"
             value={nome}
             onChange={txt => setNome(txt.target.value)}
          />

       <label className="form-label">Informe email</label>
          <input 
             className="form-control" type="email" placeholder="informe email"
             value={email}
             onChange={txt => setEmail(txt.target.value)}
          />

       <label className="form-label">Informe fone</label>
          <input 
             className="form-control" type="text" placeholder="informe fone"
             value={fone}
             onChange={txt => setFone(txt.target.value)}
          />

          <div className="mt-3">
              <button className="btn btn-primary" onClick={salvar}>Gravar</button>
          </div>
        </>
    )
}