/*
    This approach is breaking the principle since the class NotifyService is not allowing to add new functionalities without having to make 
    modifications to the class.
    
    desvantages: 
        1. If another notification method has to be added, it would be necessary to make modifications on the send method
        2. It is harder to maintain as new methods are added
*/

class NotifyService {
    constructor(method) {
        this.method = method;
    }

    send(message) {
        // the notifications is sent using a method depending on the value of the method property
        if (this.method === 'email') return this.sendEmail(message);
        if (this.method === 'sms') return this.sendSMS(message);

        // more methods...
        // if (this.method === 'METHOD') return this.sendSMS(message);
        // if (this.method === 'METHOD') return this.sendSMS(message);
    }

    sendEmail(message) {
        // logic to send an email
    }

    sendSMS(message) {
        // logic to send sms
    }
}