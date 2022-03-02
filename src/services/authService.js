import { auth,createUserWithEmailAndPassword ,updateProfile } from "../firebase/firebase-config"

export const registerUser = (name,email,password)=>{
  createUserWithEmailAndPassword(auth,email,password)
    .then(async({user})=>{

      await updateProfile(user,{
        displayName: name
      });
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