const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const isNotEmpty = (value) => value.trim() !== '';
const validLength = (value) => value.trim().length > 5;
const isEmail = (value) => value.match(regex);

export{ 
  isNotEmpty,
  validLength,
  isEmail
}
