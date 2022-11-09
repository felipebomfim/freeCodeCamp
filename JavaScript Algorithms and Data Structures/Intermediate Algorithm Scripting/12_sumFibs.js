/*
    Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than 
or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the 
sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci 
sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal 
to 10 are 1, 1, 3, and 5
*/

function sumFibs(num) {
    let fibonaccis = [1,1]
    let sum = 2;
    let el = fibonaccis[0]+fibonaccis[1];
    while(el <= num) {
      fibonaccis.push(el);
      if (el%2 === 1)
        sum+=el;
      el = fibonaccis[fibonaccis.length-1]+fibonaccis[fibonaccis.length-2];
    } 
    return sum;
  }
  
  sumFibs(4);