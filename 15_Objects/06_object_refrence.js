//example


let a = 5
let b = a

console.log(`a= ${a} and b= ${b}`);

a = 8
console.log(`a= ${a} and b= ${b}`);


// object example

let obj1 = {num: 5

}
console.log(`obj1 = ${obj1.num} and obj2= ${obj1.num}`);

let obj2 = obj1;
obj2.num = 4;
console.log(`obj1 = ${obj1.num} and obj2= ${obj2.num}`);


// object equal

let p = {pop:5};
let q = {pop:5};

console.log(p==q);
console.log(p===q);