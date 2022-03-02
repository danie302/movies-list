import { auth,createUserWithEmailAndPassword } from "../firebase/firebase-config"

export const registerUser = (email,password)=>{
  createUserWithEmailAndPassword(auth,email,password)
    .then(({user})=>{
      console.log('usuario añadido');
      console.log('Credenciales');
      console.log(user);
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
}