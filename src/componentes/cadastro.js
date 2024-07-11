import Consulta from "./consulta";

export default function Cadastro(){
    return(
        <div>
            <h2 className="text-center">Novo contato</h2>
            <label>Informe nome</label>
            <input className="form-control" type='text' placeholder="informe nome" />
            
            <label>Informe Email</label>
            <input className="form-control" type='email' placeholder="informe email" />

            <button className="btn btn-primary mt-2">Gravar</button>

            <Consulta />
        </div>
    )
}