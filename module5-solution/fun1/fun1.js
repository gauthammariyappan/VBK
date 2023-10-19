// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to display the factorial
function displayFactorial() {
    const input = prompt("Enter a number to calculate its factorial:");
    const number = parseInt(input);

    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    const result = factorial(number);
    alert(`The factorial of ${number} is ${result}`);
}
function fun1(){
    fun2();
}
