/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 1000th prime number?
 */

function IsPrime(value) {
    if (value == 1)
        return false;
    if (value == 2)
        return true;
    else {
        for (var i = 2; i < value; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return true;
    }
}

for (var primeCount = 0, number = 2; ; IsPrime(number++)) {
    if (IsPrime(number) == true) {
        primeCount++
        console.log(number, primeCount)
    }
    if (primeCount == 1000)
        break
}