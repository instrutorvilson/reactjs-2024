import { createStore } from "redux";
import rotateReducer from "../reducers/rotateReducer";

function configureStore(state = {
      rotating: true,  
      cor:'red', 
      email:'maria@gmail.com',
      perfil: '',
      user:{ email:'joao@gmail.com'}
    }){
    return createStore(rotateReducer, state)
}

export default configureStore