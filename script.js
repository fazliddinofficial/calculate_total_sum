let studentsResults = [{
    javascript: 8,
    html: 8,
    css: 8
},
studentTwo = {
    javascript: 7,
    html: 8,
    css: 8
},
studentThree = {
    javascript: 6,
    html: 8,
    css: 8
}];


function getElementValue() {
    return this.javascript + this.html + this.css;
}
let result = 0;
let finalResult = 0;

for (let i = 0; i < studentsResults.length; i++) {
    let registNum = i + 1;
    let eachElement = studentsResults[i];
    for (let i = 0; i < 1; i++) {
        result = getElementValue.call(eachElement);
    }
    finalResult += result;
    console.log(`Student ${registNum} total result is ` + result);
}
console.log('all students result ' + finalResult);























// let studentOne = {
//     javascript: 6,
//     html: 8,
//     css: 8
// }
// let studentTwo = {
//     javascript: 7,
//     html: 8,
//     css: 8
// }
// let studentThree = {
//     javascript: 7,
//     html: 7,
//     css: 6
// }
// function getFullValue() {
//     return this.javascript + this.html + this.css;
// }
// let resultOne = getFullValue.apply(studentOne);
// let resultTwo = getFullValue.apply(studentTwo);
// let resultThree = getFullValue.apply(studentThree);
// let arr = [resultOne,resultTwo,resultThree];
// let finalRes = 0;
// for (let i = 0; i < arr.length; i++) {
//     finalRes += arr[i];
// }
// console.log(finalRes);
























// let arr = {
//     javascript: 6,
//     html: 8,
//     css: 8
// }

// let newResult = arr.map(function (value, index, arr) {
//     let res = value.css + value.html + value.javascript;
//     return res;
// });

// let result = 0;
// for (let i = 0; i < newResult.length; i++) {
//     result += newResult[i];
// }

// console.log(result);
