export class User {
    constructor(id, firstName, lastName, email, groupIds) {
        this.id = id || '',
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.email = email || '';
        this.groupIds = groupIds || [];
    }
}