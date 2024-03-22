/*
    This approach is following the principle since UserRepository is only inheriting methods that will use
    
    desvantages: 
        1. object instance are ligther since they have to load neccessary methods
        2. code is easier to maintain
*/

class MySQLUserRepository{
    constructor() { }

    getAll() { }

    getById(id) { }
}