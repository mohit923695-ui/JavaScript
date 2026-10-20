function arrcopy(arr){
  return arr.slice(0 , arr.length)
}
let arr = [1,5,7,9]
console.log(arr.slice(arr));
let arr2 = arr.copyWithin(arr);
arr2[0] = null
console.log(arr2);