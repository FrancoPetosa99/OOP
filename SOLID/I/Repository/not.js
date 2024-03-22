/*
    This approach is breaking the principle since the class UserRepository is implementing methods from InterfaceRepository that will not use.
    
    desvantages: 
        1. object instance are heavier since they have to load many methods unneccessarily
        2. code is hard to maintain
*/

class InterfaceRepository{
    constructor(dao) {
        this.dao = dao;
    }

    getById(id) { }

    getAll() { }

    update(newData) {}

    create(newUser) { }
    
    remove(id) { }
}

class UserRepository extends InterfaceRepository{
    constructor(dao) {
        super();
    }

    // overwrite super class method
    getById(id) { }

    // overwrite super class method
    getAll() { }

}