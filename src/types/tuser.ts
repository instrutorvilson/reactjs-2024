export interface TUser {
    nome:string
    email: string    
}

export type ContextType = {
    user: TUser;
    atualizaLogin: (novoUser: TUser) => void;
  }