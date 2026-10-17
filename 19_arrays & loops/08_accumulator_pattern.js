let num = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for(let i = 0; i<num.length; i++){
  sum = sum + num[i]
}
console.log(`sum of the array is ${sum}`);




let square = [];
for(let i = 0; i<num.length; i++){
  square.push(num[i]*num[i]);
}
console.log(`squares of the array are ${square}`);
