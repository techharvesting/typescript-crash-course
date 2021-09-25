"use strict";
// string, number, boolean, 
// const jsCode: string = 'Hello'
// const age: number = 13;
// let myVar: number
// myVar = 14;
// console.log(myVar);
// Arrays
const myArr = [1, 2, 3, 4, 5];
const myStrArr = ['hello', 'hi'];
myArr.push(6);
// name, age, knowsToCode
const myTuple = [
    'Naseel',
    13,
    true
];
// console.log(myTuple);
// Enum
var myDir;
(function (myDir) {
    myDir["Top"] = "top";
    myDir["Center"] = "center";
    myDir["Bottom"] = "bottom";
})(myDir || (myDir = {}));
const me = {
    name: 'Naseel',
    age: 13
};
// console.log(me);
const myAge = 13;
const myNumAge = myAge;
const product = (num1, num2) => {
    return num1 * num2;
};
class User {
    constructor(uid, name) {
        this.name = name;
        this.uid = uid;
        console.log(this.name, this.uid);
    }
    register() {
        console.log('User Created');
    }
    login() {
        return 'JWT: refgthrf.frefdc.fe';
    }
}
const Naseel = new User('123456yrtgfe', 'Naseel');
console.log(Naseel);
