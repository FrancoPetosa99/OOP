/*
    This approach is following the principle since UserController class is not depending on a concrete class
    
    advantages: 
        1. object instance are ligther since they have to load neccessary methods
        2. code is easier to maintain and escale
*/

class MySQLUserRepository {
    constructor() { }

    getAll() { }

    getById(id) { }
}

class MongoUserRepository {
    constructor() { }

    getAll() { }

    getById(id) { }
}

class UserController {
    constructor(repository) {
        this.repository = repository;
    }

    getUserById(id) {
        return this.repository.getById(id);
    }
}

// it is easy to change between different data bases
const userController = new UserController(new MySQLUserRepository());
const userController = new UserController(new MongoUserRepository());