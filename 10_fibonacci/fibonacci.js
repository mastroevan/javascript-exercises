// fibonacci.js
const fibonacci = (n) => {
    // Convert string inputs to number
    n = Number(n);
    
    // Handle negative inputs
    if (n < 0) {
      return "OOPS";
    }
  
    // Base cases
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
  
    // Compute Fibonacci sequence iteratively to avoid call stack limits with recursion
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  };
  

// Do not edit below this line
module.exports = fibonacci;
