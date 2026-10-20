// task 4

function isprime(num) {
  
  for (let i = 2; i <= num; i++) {
    if (num % 2 === 0) 
      return false;
  }
  return true;
}
let num = 2;
let i = 0;
while(i<10){
  if(isprime(num)){
    console.log(num)
    i++;
  }
  num++;
}