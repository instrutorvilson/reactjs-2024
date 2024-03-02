import { useState } from "react"

export default function Contador(){
    const[cont, setCont] = useState(0)
     function add(){
        setCont(cont + 1)
     }

     function dec(){
        setCont(cont - 1)
     }
    return(
        <div>
            <h2>Contador</h2>
            <label>Valor: {cont} </label>
            <button onClick={add}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}