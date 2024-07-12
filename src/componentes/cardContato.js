export default function Cardcontato( props ) {
    return(
        <div className="card m-2" style={{width:'30vh'}}>
            <p>Nome: {props.contato.nome }</p>
            <p>Email: {props.contato.email }</p>
            <div className="d-flex justify-content-between p-2">
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Excluir</button>
            </div>
        </div>
    )
}