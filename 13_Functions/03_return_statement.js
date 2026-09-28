// return statement


function move(){
  let random = Math.random();
  let randommove = Math.floor(random * 3);
  return randommove;
}
console.log(move());


// other example
function drive(){
  let age = 21;
  let satus;
  if (age>18){
    status = `you can drive`
  }
  else{
    status= `not drive`
  }
  return status;
}
console.log(drive());