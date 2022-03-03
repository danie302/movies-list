import { auth,createUserWithEmailAndPassword ,updateProfile, signInWithEmailAndPassword } from "../firebase/firebase-config";
import { types } from "../types/types";

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

export const login = (email,password)=>{
  return signInWithEmailAndPassword(auth,email, password)
    .then(({user})=>{
      return user;
    })
    .catch((error)=>{
      const errorMessage = error.message;
      return errorMessage      
    })
}

export const authReducer = (state={},action)=>{
  switch(action.type){
    case types.login:
      return{
        uid: action.payload.uid,
        name: action.payload.name
      }
    case types.logout:
      return{}
    default:
      return state;
  }
  
}