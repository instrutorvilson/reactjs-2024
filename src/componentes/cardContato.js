export default function Cardcontato( props ) {
    function handleEditar(){
        props.onEditar(props.contato)
    }

    function handleExcluir(){
        props.onExcluir(props.contato)
    }

    return(
        <div className="card m-2" style={{width:'30vh'}}>
            <p>Nome: {props.contato.nome }</p>
            <p>Email: {props.contato.email }</p>
            <div className="d-flex justify-content-between p-2">
                <button onClick={handleEditar} className="btn btn-primary">Editar</button>
                <button onClick={handleExcluir} className="btn btn-danger">Excluir</button>
            </div>
        </div>
    )
}