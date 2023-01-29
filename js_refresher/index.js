/*

------    SURVIVAL GUIDE TO JAVASCRIPT ------

*/


console.log("play");

//  -------------- JS SURVIVAL GUIDE ------------

// ............ js primitives .............
console.log(typeof 23);
console.log(typeof undefined);
console.log(null == undefined);
console.log(true === undefined);

function func(){
    return undefined;
}

console.log(func());


// complex types are not primitives - they are OBJECTS
console.log(typeof[]);
console.log(typeof{});
console.log(typeof func);
console.log(typeof function (){});  
// NOTE: if it's not a primitive, it's an object!

// weirdness - 'primitive wrapper obejcts'
//  Boolean(), Number(), String()

var foo = Boolean(false);
foo

var foo = String('hello')
var t = (typeof foo);
t

// ............. truthy - falsy types .............

var truthy;

if(truthy){
    // do this 
} else if (truthy == null){
    // do this
} else {
    // do that
}

console.log(true)
console.log(! {})
// checking for truthiness - double !! should return true
console.log(!! {})
console.log({})
console.log(!! {})
console.log(!! '')
console.log(!! 'hi')
console.log(!! 0)
console.log(!! 0)
// !! essentially does 'is truthy'

var x = true;
console.log(x)

var and = true && false
console.log(and)

// ........... equality operators ............
//  == abstract comparison - converts types before doing comparison
var x = "23" == 23
console.log(x)
    // types in JS are weird, so many linters say:
        // NOTE: DON'T USE ABSTRACT COMPARISON

//  === strict equality operator
var x = "23" === 23
console.log(x)
//  compares types then values - has a more predictable behaviour

// .............. conditionals, control flow ..............

// ternary
// var truthy = true;
var x = truthy ? 1 : 2;
console.log(x)
    // if truthy is undefined, so returns 2

// switch
var expression = 'dog';
switch (expression){
    case 'dog':
        console.log("doggo")
        // break; // without break, all cases will be evaluated
            // execution then will 'fall-through'
    case 'dog':
        console.log("catto")
        break;
}

// try - catch
try{
    // throw new Error();
    console.log('works!')
} catch(error){
    console.log('bruh!')
}

// ............... variables ............
{
var x;

x = 'hmmm'

var x = 'hmmmmmmmm'

let y = 'hmmmmmmmmmmmmmmmmm'

const z = 'hmmmmmmmmmmmmmmmmmmmmm'
// var can be redeclared
// let cannot!!
// const cannot ofc
}

// execution context

var g = 'global'

undeclared_global = 'uglobal' // NOTE: <- NEVER DO THIS, USE VAR GLOBALLY

function app(){
    var l = 'local'
    undeclared_global = 'uglobal' // NOTE: <- NEVER DO THIS, USE VAR GLOBALLY
    console.log(g);
    console.log(undeclared_global);
}

app();
// console.log(l);
console.log(undeclared_global);

// hoisting

console.log(x)

var x = 'hoisted' // this gets placed BEFORE the execution context (='hoisted', like a flag)
// var

// NOTE: JS engine places all variables at the top of their contexts

// blocks, scope
// let, const

if (true)
{
    // block starts...
    let x = 23; // <- has local scope
    // var x = 23; NOTE: DON'T DECLARE VAR IN SCOPES!!!!

    const c  = 89;
    // c = 90; consts cannot be reassigned
}

console.log(x) // 


/* .............................. functions ............................. */

function hello(input){
    return input
}

console.log(hello(90));

// const goodbye
const goodbye = (input) => 42 // arrowed functions - on a single line
console.log(goodbye('lol'))

// anonymous vs named functions8

// function someName(){return 9;};
const someName = ( // introducing anonymous function (=a lambda)
    function(){}
    );
// created a lambda and assigned name to it

console.log(((input) => 42)())
// created an ad-hoc lambda and called it

// higher order functions
function cool(func){
    func();
    // return 'lol'
}

console.log(cool(() => console.log('sweet!')))
// lambda, passed to cool(func) prints 'sweet!' and returns nothing (=returns undefined)


// nested functions and CLOSUES (замыкания)
function outer(){
    /*  Closure is a nested function where the inner function
        references the scope of the outer function
    */
   
    const fish = '🐟'; 
    let count = 0; // NOTE: variables will be held in memory even after return!!!

    function inner(){
        count++;
        return `${count} ${fish}` // fstring ?
        // NOTE: it means that inner function remebers the state of outer scope
        // (LIKE STATIC VARIABLES!!!) - but this is stored on the heap, globally, then garbage-collected
    }
    return inner
}

const fun = outer();

// Kinda works like a class attribute
console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());
// count is ac
// NOTE: closures in python are written in a closure.py


// ........................... OBJECTS .........................

// key-value pairs

const obj = new Object(); 
obj.name = 'false' // objects are modifiable
obj.name = 'lol';

console.log(obj)

// this..... 

const obj2 = {
    name: 'Clown',
    face: '🤡',
    age: 99,
    // hello: () => console.log(`hello I am ${this.name}`)
    hello: function() {
        console.log(this);
    },

    // weirder side of `this`
    hello2: () => {console.log(this)}
    // NOTE: in arrow function attributes 'this' bypasses the object and refers to 'global object'!!
        /*
            Global object - an object which is defined for global scope.
            All the context variables in global scope are attributes of Global Object
            NOTE: in vanilla, GO is Window.
                In Node.js GO is not defined.... In Node GOs are modules (like in Python)
        */
};

obj2.hello()
obj2.hello2()

console.log(this);

// this gets even weirder

const clown = {
    face: '🤡'
}

const ghost = {
    face: '👻' 
}

function hello(){
    return this.face;
}

const result = hello.call(ghost)
// .call creates another function, but wrapped in context

console.log(result)
console.log(hello.call(clown))