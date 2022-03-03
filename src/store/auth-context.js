import { createContext } from "react";


export const AuthContext = createContext({
  user:{name:'', uid:''},
  dispatch: ()=>{}
});
