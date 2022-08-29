// Write your function here:
const calculateWeight = (earthWeight, planet) => {
    // check input variable
    console.log(typeof earthWeight);
    console.log(typeof planet);

    if (typeof earthWeight === 'number' && typeof planet === 'string') {
        switch (planet) {
            case 'Mercury':
                return earthWeight * 0.378;
            case 'Venus':
                return earthWeight * 0.907;
            case 'Mars':
                return earthWeight * 0.377;
            case 'Jupiter':
                return earthWeight * 2.36;
            case 'Saturn':
                return earthWeight * 0.916;
            default:
                return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
        }
    }
}
// Uncomment the line below when you're ready to try out your function
//  console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!

console.log(calculateWeight(1000, 'Jupiter'));
console.log('-------------------------------');
console.log(calculateWeight('abv', 100));
// console.log(calculateWeight(1000, 'Entry'));

