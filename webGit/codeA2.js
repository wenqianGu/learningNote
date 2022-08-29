// Write your function here:
const finalGrade = (num1, num2, num3) => {
    // calculate the average of those three parameters
    const average = (num1 + num2 + num3) / 3;
    if (average >= 0 && average <= 59) {
        return 'F';
    } else if (average >= 60 && average <= 69) {
        return 'D';
    } else if (average >= 70 && average <= 79) {
        return 'C';
    } else if (average >= 80 && average <= 89) {
        return 'B';
    } else if (average >= 90 && average <= 100) {
        return 'A';
    } else {
        return 'You have entered an invalid grade.';
    }
}


// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(58, 56, 45));
console.log(finalGrade(61, 80, 72));
console.log(finalGrade(-1, -1, -1));
console.log(finalGrade(-1, -1, -1));