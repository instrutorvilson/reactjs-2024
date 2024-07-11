export default function Consulta(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.dados.map(ct => {
                            return (
                            <tr>
                                <td>{ct.nome}</td>
                                <td>{ct.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}