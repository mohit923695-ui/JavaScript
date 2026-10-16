let obj = {
  name: 'John',
  age: 30
};
let myarray = [1,'hello', true, null, undefined, {name: 'John'}, [1, 2, 3]];

console.log(myarray[0]); 
console.log(myarray[4]);
console.log(typeof myarray[5]); 

console.log(Array.isArray(myarray));  //check variable is array or not
console.log(Array.isArray(obj));

console.log(myarray.length);    //length of the array