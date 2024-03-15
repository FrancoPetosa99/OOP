/*
    This approach is breaking the principle since the class Turtle could not be totally replaced by class Animal
    
    desvantages: 
        1. Makes class implementation tricky since it is necessary to identify from which class the object has been instanced of
        2. It is harder to maintain as new classes are added
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walking...');
    }

    run() {
        console.log('running...');
    }

    hunt() {
        console.log('hunting...');
    }
}

class Tiger extends Animal {
    constructor(name) {
        super(name)
    }
}

class Turtle extends Animal {
    constructor(name) {
        super(name)
    }

    run() {
        throw new Error('Can not run');
    }

    hunt() {
        throw new Error('Can not hunt');
    }
}