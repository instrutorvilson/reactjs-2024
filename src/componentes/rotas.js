import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component1 from "./componente1";
import Component2 from "./component2";
import Component3 from "./componente3";
import Menu from "./menu";

export default function Rotas(){
    return(
        <BrowserRouter>
           <Routes>
               <Route path='/' element={<Menu />}/>
               <Route path='componente1' element={<Component1 />}/>
               <Route path='componente2' element={<Component2 />}/>
               <Route path='componente3' element={<Component3 />}/>
           </Routes>
         </BrowserRouter>
    )
}