let arr = [1, 2, 3, 4, 5];


console.log(arr);
arr.push(6);            //add elemnet using push method
console.log(arr);

arr.pop();             //remove last element using pop method
console.log(arr);
arr.pop();             //remove last element using pop method
console.log('popped' + arr.pop());  
console.log(arr);

//remove element using splice method
console.log(arr.splice(1, 4));


let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.toString());  //convert array to string


let arr2 = [1,9, 2,7, 3, 4, 5];
console.log(arr2.sort());  //sort array in ascending order

console.log(arr2.valueOf());  //return the array value
arr2[0] = 10;
console.log(arr2.valueOf());     //refrence of the array is same but value is changed

let [a, b, c] = arr2;   //destructuring of array
console.log(a + ' ' + b + ' ' + c);