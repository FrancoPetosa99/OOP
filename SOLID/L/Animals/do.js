/*
    This approach is breaking the principle since the class Turtle could not be totally replaced by class Animal
    
    desvantages: 
        1. Makes class implementation tricky since it is necessary to identify from which class the object has been instanced of
        2. It is harder to maintain as new classes are added
*/

class WalkInterface {
    constructor() {}
    walk() {
        console.log('walking...');
    }
}

// if an animal runs, then it walks as well
class RunInterface  extends WalkInterface {
    constructor() {
        super();
    }
    run() {
        console.log('running...');
    }
}

// if an animal hunts, then it runs as well
class HuntInterface extends RunInterface{
    constructor() {
        super();
    }

    hunt() {
        console.log('hunting...');
    }
}

class DepredadorAnimal extends HuntInterface {
    constructor(name) {
        super();
        this.name = name;
    }
}

class NoDepredadorAnimal extends WalkInterface {
    constructor(name) {
        super();
        this.name = name;
    }
}

class Tiger extends DepredadorAnimal {
    constructor(name) {
        super(name);
    }
}

class Turtle extends NoDepredadorAnimal {
    constructor(name) {
        super(name)
    }
}