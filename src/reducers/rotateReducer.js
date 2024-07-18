export default (state, action) => {
   console.log(action.payload)
   switch(action.type){
      case "rotate":
        return { rotating: action.payload}        
      case "mudacor":
            return { cor: action.payload}

      case "alterarEmail":
              return { email: action.payload}
      case "logar":
                return { email: action.payload.email, perfil: action.payload.perfil}
      default:
        return state  
   }
}