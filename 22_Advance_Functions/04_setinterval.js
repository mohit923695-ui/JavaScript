let alarm = () => console.log(`'uth jao ', 'subah ho gyi hai '${new Date}`);

let intervalId = setInterval(alarm, 1000);
setTimeout(() => clearInterval(intervalId), 5000);    
