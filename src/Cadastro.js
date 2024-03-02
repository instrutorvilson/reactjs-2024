function Cadastro() {
    return (
        <div className="container">
            <h2>Cadastro</h2>
            <div className="mb-2">
                <label className="label-control">Informe nome</label>
                <input className="form-control" type="text" placeholder="EX: maria" />
            </div>

            <div className="mb-2">
                <label className="label-control">Informe email</label>
                <input className="form-control" type="text" placeholder="EX: maria@gmail.com" />
            </div>

            <div className="mb-2">
                <label className="label-control">Informe fone</label>
                <input className="form-control" type="text" placeholder="EX: (47) 9090-7060" />
            </div>
            
            <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-outline-primary">Salvar</button>
                <button className="btn btn-outline-danger">Cancelar</button>
            </div>
        </div>
    )
}

export default Cadastro;