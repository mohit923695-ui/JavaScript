console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

console.log(Boolean(10));       // true
console.log(Boolean("Hello"));  // true
console.log(Boolean("0"));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true