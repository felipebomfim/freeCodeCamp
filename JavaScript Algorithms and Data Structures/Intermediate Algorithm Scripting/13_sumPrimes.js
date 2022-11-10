/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    if (num < 2)
      return 0
    let primes = [];
    let next = 2;
    let is_prime;
    while(next <= num){
      is_prime = true;
      for (let i = 0; i<primes.length; i++)
        if (next%primes[i] === 0){
          is_prime = false;
          break;
        }
      if (is_prime)
        primes.push(next);
      next++;
    }
    let sum = primes.reduce((sum,a)=>sum+a,0);
    return sum;
  }
  
  sumPrimes(10);