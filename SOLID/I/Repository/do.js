/*
    This approach is following the principle since UserRepository is only inheriting methods that will use
    
    advantages: 
        1. object instance are ligther since they have to load neccessary methods
        2. code is easier to maintain
*/

class InterfaceRedableRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getById(id) { }

    getAll() { }
}

class InterfaceWriteableRepository {
    constructor(dao) {
        this.dao = dao;
    }

    create(newUser) { }

    update(newData) { }
}

class InterfaceRemoableRepository {
    constructor(dao) {
        this.dao = dao;
    }

    remove(id) { }
}

class UserRepository extends InterfaceRedableRepository {
    constructor(dao) {
        super();
    }

    // overwrite super class method
    getById(id) { }

    // overwrite super class method
    getAll() { }
}