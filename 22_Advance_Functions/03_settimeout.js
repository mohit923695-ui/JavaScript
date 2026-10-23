let alarm = () => console.log(`'uth jao ' , 'subah ho gyi hai '${new Date}`);

let timerid = setTimeout(alarm , 2000);      
console.log(`set timerid : ${timerid}`);

clearTimeout(timerid);