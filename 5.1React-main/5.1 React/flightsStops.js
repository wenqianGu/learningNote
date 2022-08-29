/**
 * Given by an array of flights, returns stops statement to user
 * - flights:[{origin:'MEL', destination:'CAN'}] -> Direct
 * - flights:[{origin:'MEL', destination:'CAN'},{origin:'CAN', destination:'PFG'}] -> '1 stop'
 * - flights:[{origin:'MEL', destination:'CAN'},{origin:'CAN', destination:'PFG'},{origin:'PFG', destination:'HK'}] -> '2 stops'
 * - flights:[{origin:'MEL', destination:'CAN'},{HKG - CAN},{CAN - SNG},{origin:'CAN', destination:'PVG'}] -> 'n stops'
 * getStops(flight) -> return direct, 1 stop, 2 stops, 3 stops
 * */

let flight0 = [];
let flight1 = [{origin: 'MEL', destination: 'CAN'}];
let flight2 = [{origin: 'MEL', destination: 'CAN'}, {origin: 'CAN', destination: 'PFG'}];
let flight3 = [{origin: 'MEL', destination: 'CAN'}, {origin: 'CAN', destination: 'PFG'}, {
    origin: 'PFG',
    destination: 'HK'
}];
let flight4 = [{origin: 'MEL', destination: 'CAN'}, {origin: 'HKG', destination: 'CAN'}, {
    origin: 'HKG',
    destination: 'CAN'
}, {origin: 'CAN', destination: 'PVG'}];
let flight5 = [{origin: 'MEL', destination: 'CAN'}, {origin: 'HKG', destination: 'CAN'}, {
    origin: 'HKG',
    destination: 'CAN'
}, {origin: 'CAN', destination: 'PVG'}, {origin: 'CAN', destination: 'PVG'}];
const getStops = function (flight) {
    // if (flight !== undefined) {
    //     // console.log(flight.length)
    //     switch (flight.length) {
    //         case 1:
    //             return flightStops = 'Direct';
    //         case 2:
    //             return flightStops = '1 stop';
    //         default:
    //             return flightStops = `${flight.length - 1} stop`
    //     }
    // } else {
    //     console.log(`illegal flight`)
    // }
    // method 2
    let length = flight.length;
    let direct = length === 1 && "Direct";
    let singular = length === 2 && "1 stop";
    let multipleStops = length > 2 && (length - 1) + " stops"
    return direct || singular || multipleStops;
/**
 * 日常工作时，我们不可能问用户，你是stop一次吗？不是 - 是
 * 你是stop两次吗？ 是- 不是
 * 你是stop三次吗？ 是- 不是
 * */
}
// console.log(getStops(flight1));
// console.log(getStops(flight2));
// console.log(getStops(flight3));
// console.log(getStops(flight4));
// console.log(getStops(flight5));

// methods - from teacher -> Best practise -> readable, maitanence,
function getStops2(flight) {
    const length = flight.length;
    const specialMessage = {
        1: 'Direct',
        2: '1 stop',
        17: 'The Asian Trip',
        0: 'On the sky',
        32: 'Around the world'
    }
    return specialMessage[length] || (length - 1) + " stops"
}
/**
 * 用户思考方式：
 * 1. - 用户有4张机票
 * 2. 4张机票，是不是有special stops naming
 * 3. 4 张机票似乎不是有特殊定义
 * 4. -> return 3 stops
 *
 * */

console.log(getStops2(flight0));
console.log(getStops2(flight1));
console.log(getStops2(flight2));
console.log(getStops2(flight3));
console.log(getStops2(flight4));
console.log(getStops2(flight5));