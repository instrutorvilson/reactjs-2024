export default (state, action) => {
   console.log(action.payload)
   switch(action.type){
      case "rotate":
        return { rotating: action.payload}        
      case "mudacor":
            return { cor: action.payload}

      case "alterarEmail":
            return { ...state, user: { ...state.user, email: action.payload } };
      case "logar":
                return { user: action.payload}
      default:
        return state  
   }
}