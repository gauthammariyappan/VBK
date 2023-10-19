// function rawto calculate the factorial of a number
function rawfactorial3(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// function rawto display the factorial
function rawdisplayFactorial3() {
    const input = prompt("Enter a number to calculate its factorial:");
    const number = parseInt(input);

    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    const result = factorial(number);
    alert(`The factorial of ${number} is ${result}`);
}
function rawfun3(){
    let x= 10;
    x = y + 10;
}