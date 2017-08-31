'use strict'

let madLib = (verb, adj, noun) => {
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
  }

console.log(madLib('make', 'best', 'guac'));


let isSubstring = (searchString, subString) => searchString.includes(subString);

console.log(isSubstring("time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));

let fizzbuzz = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (( array[i] % 3 === 0 && array[i] % 5 != 0 ) || ( array[i] % 5 === 0 && array[i] % 3 != 0 ))
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]));

let isPrime = (number) => {
  if (number < 2) { return false; }

  for (let i = 2; i < number; i++) {
    if ( number % i === 0 ) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));

let sumOfNPrimes = (n) => {

  let firstNPrimes = (n) => {
    let primes = []

    let i = 2;
    while (primes.length < n) {
      if (isPrime(i)) { primes.push(i); }
      i++;
    }

    return primes;
  }

  let sum = 0;
  let nPrimesArray = firstNPrimes(n);
  nPrimesArray.forEach ( (primeNumber) => {
    sum += primeNumber
  });

  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4  ));
