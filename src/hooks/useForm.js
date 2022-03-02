import { useReducer } from "react";

const initialState={
  value: '',
  isTouched: false,
}

const types ={
  input: 'INPUT',
  blur: 'BLUR',
  reset: 'RESET'
}

const formReducer = (state, action)=>{
  switch (action.type){
    case types.input:
      return{
        value: action.value,
        isTouched: state.isTouched
      };
    case types.blur:
      return {
        isTouched: true,
        value: state.value
      }
    case types.reset:
      return{
        isTouched:false,
        value: ''
      };
    default:
      return state;
  }
};

export const useForm = (validateValue)=>{
  const [valueState, dispatch] = useReducer(formReducer,initialState);

  const valueIsValid = validateValue(valueState.value);
  const hasError = !valueIsValid && valueState.isTouched;

  const valueChangeHandler = (event)=>{
    dispatch({
      type: types.input,
      value: event.target.value
    });
  }
  const blurHandler = (event)=>{
    dispatch({
      type: types.blur,
    });
  }
  const resetHandler = ()=>{
    dispatch({
      type: types.reset
    });
  }
  return{
    value: valueState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    blurHandler,
    resetHandler
  }
}