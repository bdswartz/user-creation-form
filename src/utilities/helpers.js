export const validateEmail = (email) => {
  var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegEx.test(String(email).toLowerCase());
}

//removing duplicate items in an array
export const removeRepeatItems = (arr) => {
let newArray = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
});
return newArray;
}