let sum = function(num1, num2) {
  return num1 + num2;
};
// console.log(sum(4, 5));

let sumofthreenum = function(num1, num2, num3, sumoftwonum) {
  let sumoftwo = sumoftwonum(num1, num2);
  return sumoftwonum(sumoftwo, num3);
};
console.log(sumofthreenum(4, 5, 6, sum));

console.log(sumofthreenum);
console.log(typeof sumofthreenum);


