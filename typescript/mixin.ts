/** 
 * Mixin - a composed class which uses external bundled functionality 
 * in encapsulated functors/classes
 *
*/

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        let all_properties = Object.getOwnPropertyNames(baseCtor.prototype)
        console.log(all_properties)
        all_properties.forEach(propertyName => {
            console.log(baseCtor.prototype[propertyName])
            derivedCtor.prototype[propertyName] = baseCtor.prototype[propertyName]
            console.log(derivedCtor.prototype[propertyName])
            // this loops through all target class properties
            // and assigns source classes properties
        })
    })
}

class CanSayHi{
    name;

    sayHi(){
        return `Hello, ${this.name}`
    }
}

class HasSuperPower {
    heroName;

    superpower(){
        return `${this.heroName}`
    }
}

class SuperHero implements CanSayHi, HasSuperPower{

    heroName;
    
    constructor(public name){
        this.heroName = `SUPER ${name}`
    }

    sayHi: () => string;
    superpower: () => string;
}

applyMixins(SuperHero, [CanSayHi, HasSuperPower])

const ts = new SuperHero("TypeScript")
console.log(ts)
console.log(ts.sayHi())
console.log(ts.superpower())