// Write your function here:
const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * 0.05;
        case 'ok' :
            return total * 0.15;
        case 'good':
            return total * 0.2;
        case 'excellent' :
            return total * 0.3;
        default:
            return total * 0.18;
    }
}
// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
console.log(tipCalculator('bad', 100));
console.log(tipCalculator('ok', 100));
console.log(tipCalculator('good', 100));
console.log(tipCalculator('excellent', 100));
console.log(tipCalculator('hahah', 100));

// Write your function here:
const toEmoticon = (str) => {
    if (typeof str === 'string') {
        switch (str) {
            case 'shrug' :
                return `|_{"}_|`;
            case 'smiley face' :
                return `:)`;
            case 'frowny face' :
                return `:(`;
            case 'winky face' :
                return `;)`;
            case 'heart' :
                return `<3`;
            default:
                return `|_(* ~ *)_|`;
        }
    } else {
        return 'Please input a string';
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever"))
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
console.log(toEmoticon("shrug"));
console.log(toEmoticon("smiley face"));
console.log(toEmoticon("frowny face"));
console.log(toEmoticon("winky face"));
console.log(toEmoticon("heart"));
console.log(toEmoticon(12345));


console.log('a'.localeCompare('b'));
console.log('a'.localeCompare('a'));
console.log('b'.localeCompare('a'));

console.log(Number('123'));
console.log(Number('12.3'));
console.log(Number('123e-1'));
console.log(Number(''));
console.log(Number(null));
console.log(Number('0x11'));
console.log(Number('0b11'));
console.log(Number('foo'));
console.log(Number('100a'));
console.log(Number('-Infinity'));

// Number.parseFloat()
console.log(Number.parseFloat('123'));
console.log(Number.parseFloat('12.3'));
console.log(Number.parseFloat('123e-1'));
console.log(Number.parseFloat(''));
console.log(Number.parseFloat(null));
console.log(Number.parseFloat('0x11'));
console.log(Number.parseFloat('0b11'));
console.log(Number.parseFloat('foo'));
console.log(Number.parseFloat('100a'));
console.log(Number.parseFloat('-Infinity'));

console.log(Number.isFinite(parseFloat('123')));

// Write function below
const isEven = num1 => {
    if (Number.isFinite(parseFloat(num1))) {
        return num1 % 2 === 0;
    } else {
        return 'please input correct number';
    }
}

//test
console.log(isEven('hello'));
console.log(isEven('5'));
console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(-2));
console.log(isEven(0));


// Create function here
const numberDigits = x => {
    let str = '';
    if (x >= 0 && x <= 9) {
        str = `One digit: ${x}`;
    } else if (x >= 10 && x <= 99) {
        str = `Two digit: ${x}`;
    } else {
        str = `The number is: ${x}`;
    }
    return str;
}


//test
console.log(numberDigits(0));
console.log(numberDigits(10));
console.log(numberDigits(88));
console.log(numberDigits(99));
console.log(numberDigits(-1));
console.log(numberDigits(-202));

