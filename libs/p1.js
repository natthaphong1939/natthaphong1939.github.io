function showPrimes(n) {
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    let text = "For n = " + n + " prime numbers are " + primes.join(",");
    alert(text);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function promptPositiveInteger() {
    let input = prompt("Enter a positive integer");

    if (!input || isNaN(input) || parseFloat(input) <= 0 || parseInt(input) !== parseFloat(input)) {
        promptPositiveInteger();
    } else {
        showPrimes(input);
    }
}

promptPositiveInteger();