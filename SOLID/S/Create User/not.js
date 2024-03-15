/*
    This approach is breaking the principle since the class CreateUserService is holding more than one responsability:
        1. create new account on data base
        2. notify user that new account has been created
    
    desvantages: 
        1. If it happened to be necessary to change how emails are sent, the class CreateUserService would need to be modified
        2. It is harder to maintain
*/

class CreateUserService {
    constructor(repository, client) {
        this.repository = repository;
        this.client = client;
    }

    async createUser(newUser) {
        // both logic to notify and create user on data base are placed in the same class
        await this.repository.create(newUser);
        await this.sendEmail({ to: [ newUser.email ], body: 'Your account has been successfully crated'});
    }

    sendEmail(email) {
        // logic to send email to the new user
        return this.client.sendEmail(email);
    }
}