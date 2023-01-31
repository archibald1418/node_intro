// OOP

class Emoji {
    // icon:string;
    // constructor(icon){
    //     this.icon = icon;
    // }

    private _prev;

    // or like this, without fields
    constructor(private _icon: string){};
    
    // getter for private attribute
    get icon(){
        return this._icon
        // private is marked with _
    }

    get prev(){
        return this._prev
    }

    change(val){
        this._prev = this._icon;
        this._icon = val
    }

    static addOneTo(val){
        return 1 + val;
    }

};

const Sun = new Emoji('🌞')
// Sun.icon = '5' // public attribute
console.log(Sun)
// getting hard to track changes
// since class is just sugar for closures with inheritance


// Composition vs inheritance
/**
 * inhertiance - child classes extend or override parent behaviour
 * composition - breaks apart interfaces and logics into smaller pieces
 * then builds larger objects or interfaces by combining those pieces
 * 
 */

class Human {
    constructor(public name: string){}
    
    sayHi(){
        return `Hello, I am ${this.name}`
    }
}

const patrick = new Human("Patrick")
console.log(patrick.sayHi())

class SuperHuman extends Human{

    heroName; // private by default?

    constructor(name){
        super(name);
        this.heroName = `HERO ${name}`
    }

    superpower(){
        return `${this.heroName} pops 🔥🏀🏀🏀 treys`
    }
}

const steph = new SuperHuman("Steph Curry")
console.log(steph.sayHi())
console.log(steph.superpower())

// Concatenate objects

/**
 * Decoupling behaviours of classes into functors
 * Can be used for creating reusable bundles of associated functionalities - 'mixins'
 */

const hasName = (name) => {return { name } } //returns object with name field
console.log(hasName("lol"));

const canSayHi = (name) => {
    return {
        sayHi: () => `Hello, ${name}`
    }
}

const Person = function(name){
    return {
        ...hasName(name),
        ...canSayHi(name)
        /**
         * ... - 'spread' operator
         * 
         * here it chains Object.assign method
         * to create object with fields named exactly
         * like the functor arguments were named
         */
    }
}

console.log(Person("foo").name)