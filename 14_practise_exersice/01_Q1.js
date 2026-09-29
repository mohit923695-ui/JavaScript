function isodd(number){
  let rem = number % 2;
  let isodd = rem == 1;
  return isodd;
}
console.log(isodd(4));
console.log(isodd(7));
console.log(isodd(1224345656747));
console.log(isodd(0));
console.log(isodd(1));