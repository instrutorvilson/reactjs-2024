import { createStore } from "redux";
import rotateReducer from "../reducers/rotateReducer";

function configureStore(state = {
      rotating: true,  
      cor:'red', 
      email:'maria@gmail.com',
      perfil: ''
    }){
    return createStore(rotateReducer, state)
}

export default configureStore