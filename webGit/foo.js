var foo = 3;
var output = 'Output: ';
switch (foo) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        output += 'What ';
        output += 'Is ';
        output += 'Your ';
        output += 'Name';
        output += '?';
        console.log(output);

    case 5:
        output += '!';
        console.log(output);

    default:
        console.log('Please pick a number from 0 to 5!');
}