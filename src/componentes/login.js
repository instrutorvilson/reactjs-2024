import { Link } from "react-router-dom"

export default function Login() {
    function logout() {
        localStorage.removeItem('userLogado')
    }
    function login() {
        localStorage.setItem('userLogado', 'maria@gmail.com')
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>


            <hr />
            <Link to='/'>Voltar</Link>
        </div>
    )
}