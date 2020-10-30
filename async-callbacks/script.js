// 

// function someCallbackFunction() {
//     console.log('Hey there, ironhackers 😎!');
// }

// setTimeout(someCallbackFunction, 2000);

// const timeoutId = setTimeout(function () {
//     console.log('Hey there, ironhackers 😎!');
// }, 2000);
// we can cancel setTimeout with clearTimeout
// clearTimeout(timeoutId);
// console.log(timeoutId);
// console.log('Runs first ⏰');

// change that code so that the setTimeout get's stopped if we counted to 5
// let counter = 1;
// const callbackFunction = function () {
//     console.log(counter);
//     timeoutId = setTimeout(callbackFunction, 1000);

//     counter += 1;
//     if (counter > 5) {
//         // use clearTimeout to stop it
//         clearTimeout(timeoutId)
//     }
// }

// let timeoutId = setTimeout(callbackFunction, 1000);

let i = 1;
const intervalId = setInterval(function () {
    console.log(i);
    i++;
    if (i > 10) {
        clearInterval(intervalId);
    }
}, 1000);







