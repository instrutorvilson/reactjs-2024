import { useState } from "react";
import Card from "./Card";

function Cadastro() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[fone, setFone] = useState('')
    const[contato, setContato] = useState({nome: '',email:'',fone:'' })
    
    function salvar(){
        setContato({nome, email, fone})
    }
    return (
        <div className="container">
            <h2>Cadastro</h2>
            <div className="mb-2">
                <label className="label-control">Informe nome</label>
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="EX: maria" 
                  value={nome}
                  onChange={event => setNome(event.target.value)}
                />
            </div>

            <div className="mb-2">
                <label className="label-control">Informe email</label>
                <input 
                   className="form-control" 
                   type="text" 
                   placeholder="EX: maria@gmail.com" 
                   value={email}
                   onChange={event => setEmail(event.target.value)}
                />
            </div>

            <div className="mb-2">
                <label className="label-control">Informe fone</label>
                <input 
                   className="form-control" 
                   type="text" 
                   placeholder="EX: (47) 9090-7060" 
                   value={fone}
                   onChange={event => setFone(event.target.value)}
                />
            </div>
            
            <div className="mt-3 d-flex justify-content-between">
                <button 
                    className="btn btn-outline-primary"
                    onClick={salvar}
                    >Salvar</button>
                <button className="btn btn-outline-danger">Cancelar</button>
            </div>
             <hr />

           {/** <Card nome={nome} email={email} fone={fone}/>*/} 
           <Card dados={contato}/>
        </div>
    )
}

export default Cadastro;