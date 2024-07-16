import { createContext } from "react";
import { ContextType } from "../types/tuser";

const LoginContext = createContext<ContextType | undefined>(undefined)

export default LoginContext