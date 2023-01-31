import * as _ from 'lodash'
    // lodash library has community supported
    // npm i -D @types/lodash - loads types for certain libraries
    // npm has a monorepo @types with community supported types

console.log('hello world')
// Typescript compiler 'tsc' transpiles into vanilla JS


async function hello(){
    return 'world'
}
// by default tsc is EcmaScript 3..., doesn't have support for async await
// will add extra crazy code to replicate async 


// tsc ES versions etc. can be configured via tsconfig.json


// .................. type annotations

// implicit typing
let lucky = 23; // type will be inferred
// lucky = '23'; // while vanilla don't mind, tsc will find a type error

let opt_out: any = 23; // 'any' annotation lets you "opt out" from type checking
opt_out = '23' // resulting in no errors

let untyped; // inferred as any
untyped = '23'
untyped = 23

let num_typed: number; // explicit typing
num_typed = 23
// num_typed = '23' // checks the types resulting in error

// if you have implicit type, don't bother explicitly typing it
// let num = 23 is just fine



// ............. creating a custom type ...............

type Style = 'bold' | 'italic' | 23; // | introduces a Union
let style1: Style = 23
// let style2: Style = 24

const person = {
    first: 'Oleg',
    last: 'Valiulin',
}

const person2: Person = {
    first: 'Usain',
    last: 'Bolt', // trailing comma is very convenient hehe
    fast: true

}

// interface - enforces a shape of an object
interface Person {
    first: string;
    last: string;
    
    // Optional fields
    [key: string]: any;
    [key: number]: any // key can be fast:true or 23:true
}

// also possible with 'type' kw, but 'interface' is more legible
type Human = {
    name: string;
    surname: string;
    [key: string]: any;
}


// ........... type annotations for functions ............

function pow(x: number, y: number): string{
    return Math.pow(x, y).toString()
}

function void_func(): void{
    console.log("void function")
}



// Arrays

const arrUntyped = []
const arrNum: number[] = []
arrNum.push(1);
arrNum.push(1);
// arrNum.push('1'); // error

const arrPerson: Person[] = []
arrPerson.push(person2)

// TS HAS TUPLES!!!
type MyList = [number, string, boolean] // typed tuple!
const arr: MyList = [1, '1', true]

type OptionalTuple = [number?, string?, boolean?]
    // this could have either all three or be empty
const tuple1: OptionalTuple = []
const tuple2: OptionalTuple = [1, '1', false]



// GENERICS!

class Observable<T>{
    // just a class with a variable you can observe
    constructor(public value: T){}
}

let x: Observable<number>
let y: Observable<Person>
let z = new Observable(23)


// OOP vs FP in TS

// FP - PRINCIPLES OF FP

// 1. Pure functions

let num = 123;

function toString(val){
    // num = val // side-effect
    return val.toString()
}

const str = toString(num)
console.log(typeof str)

// 2.  Immutable Data
    // Functional code is stateless

const data = Object.freeze([1,2,3,4,5,6])

// 3. Functions as Arguments ('first class citizen' functions)

const addEmoji = (val) => toString(val) + '😇'  ;
const emojiData = data.map(addEmoji)
console.log(emojiData)

// Functions as return value
const appendEmoji = (fixed) => (dynamic) => fixed + dynamic

const rain = appendEmoji('🌩')
const sun = appendEmoji('🌞')
console.log(rain('today'))
console.log(sun('tomorrow'))




const Sun = new Emoji('🌞');
console.log(Sun.icon);

