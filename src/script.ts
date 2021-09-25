// string, number, boolean, 

// const jsCode: string = 'Hello'
// const age: number = 13;
// let myVar: number

// myVar = 14;

// console.log(myVar);

// Arrays

const myArr: number[] = [1, 2, 3, 4, 5]
const myStrArr: string[] = ['hello', 'hi']

myArr.push(6)

// console.log(myArr);


// Unions

// type lang = 'js' | 'py' | 'go'

// const myFavLang: lang = 'js'

// type favNum = 0 | 1 | 2 | 3 | 4

// const myFavNum: favNum = 4

// console.log(myFavNum);
// Tuples

type personAttr = [string, number, boolean]
// name, age, knowsToCode
const myTuple: personAttr = [
  'Naseel',
  13,
  true
]

// console.log(myTuple);
// Enum

enum myDir {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom'
}

// console.log(myDir.Center);
// Objects & Interfaces

interface Person {
  name: string;
  age: number;
  langs?: string[]
}


const me: Person = {
  name: 'Naseel',
  age: 13
}

// console.log(me);
const myAge: any = 13
const myNumAge = myAge as number
// const myNumAge = <number>myAge

// console.log(myNumAge);
// Functions

interface ProductInt {
  (num1: number, num2: number): number
}

const product: ProductInt = (num1: number, num2: number): number => {
  return num1 * num2
}

// console.log(product(2, 4));
// Class

interface UserInterface {
  uid: string;
  name: string;
  register(): void;
  login(): string
}

class User implements UserInterface {
  uid: string
  name: string

  constructor(uid: string, name: string) {
    this.name = name
    this.uid = uid
    console.log(this.name, this.uid);
  }

  register() {
    console.log('User Created');
  }

  login() {
    return 'JWT: refgthrf.frefdc.fe';
  }
}

const Naseel = new User('123456yrtgfe', 'Naseel')

console.log(Naseel);
