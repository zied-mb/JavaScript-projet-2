


///////////////////////////////////////////////////////////////////// String Manipulation Functions:




////////////////////////////////////////Reverse a String:


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh"


////////////////////////////////////////Count Characters:


function countCharacters(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

console.log(countCharacters("hello world")); // 11


////////////////////////////////////////Capitalize Words:


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(capitalizeWords("welcome to nabeul")); // "Welcome To Nabeul"


///////////////////////////////////////////////////////////////////// Array Functions:




////////////////////////////////////////Find Maximum and Minimum:


function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
    }
    return min;
}

console.log(findMax([3, 5, 7, 2])); // 7
console.log(findMin([3, 5, 7, 2])); // 2


////////////////////////////////////////Sum of Array:


function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10


////////////////////////////////////////Filter Array:


function filterArray(arr, condition) {
    let result = [];
    for (let item of arr) {
        if (condition(item)) result.push(item);
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4], num => num > 2)); // [3, 4]


///////////////////////////////////////////////////////////////////// Mathematical Functions:




////////////////////////////////////////Factorial:


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120


////////////////////////////////////////Prime Number Check:


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true


////////////////////////////////////////Fibonacci Sequence:


function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]



