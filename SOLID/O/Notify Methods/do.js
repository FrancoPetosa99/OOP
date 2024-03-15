/*
    This approach is following the principle since it is easy to add new functionalities without having to make modifications on the classes
    
    advantages: 
        1. If another notification method has to be added, it would be only necessary to create a new class
        2. It is easy maintain
        3. Can add as much notification methods without modifying current code structure
*/

// works as an interface
class NotifyServiceInterface {
    constructor() {}
    send() {}
}

// works using same interface from NotifyServiceInterface
class NotifyServiceByEmail extends NotifyServiceInterface {
    constructor() {}
    send(message) {
        // logic to send email
    }
}

// works using same interface from NotifyServiceInterface
class NotifyServiceBySMS extends NotifyServiceInterface {
    constructor() {}
    send(message) {
        // logic to send sms
    }
}

class NotifyService {
    constructor(NotifyService) {
        this.notifyService = new NotifyService();
    }

    send(message) {
        return this.notifyService.send(message);
    }
}