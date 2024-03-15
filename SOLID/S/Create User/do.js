/*
    This approach is following the principle since the both classes createUserService and NotifyUserService only have one responsability:
        1. createUserService: creates new account on data base
        2. NotifyUserService: notifies new acccount has been created
    
    advantages: 
        1. If it happened to be necessary to change how emails are sent, only would be necessary to modified the class NotifyUserService
        2. It is easier to maintain
        3. Works using Class Colaboration
*/

class NotifyUserService {
    constructor(client) {
        this.client = client;
    }

    sendEmail(email) {
        return this.client.sendEmail(email);
    }
}

class CreateUserService {
    constructor(Repository, NotifyUserService) {
        this.repository = new Repository();
        this.emailService = new NotifyUserService();
    }

    async createUser(newUser) {
        await this.repository.create(newUser);
        await this.emailService.sendEmail({ to: [ newUser.email ], body: 'Your account has been successfully crated'});
    }
}