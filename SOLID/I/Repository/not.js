/*
    This approach is breaking the principle since the class Turtle could not be totally replaced by class Animal
    
    desvantages: 
        1. Makes class implementation tricky since it is necessary to identify from which class the object has been instanced of
        2. It is harder to maintain as new classes are added
*/

class UserRepository{
    constructor(dao) {
        this.dao = dao;
    }

    getById(id) {
        return this.dao.getById(id);
    }

    create(newUser) {
        return this.dao.create(newUser);
    }

    changePassword(newPassword) {
        if (newPassword === currentPassword) throw new Error('New Password must be different');
        return this.dao.update({ password: newPassword });
    }
}

class CreateUserController{
    constructor(Repository) {
        this.repository = new Repository();
    }

    async createUser(request, response){
        try{
            const data = request.body.data;

            // repository obj implements method that are not used
            const user = await this.repository.create(data);

            response.status(201).json({ user });
        }catch(error){
            response.status(500).json({ error });
        }
    }
}