const config = require('../config');
const httpService = require('./http-service');
/*
    DbService is a singleton which serves methods to perform various queries on Users and groups to the db server.
*/
class DbService {
    static getInstance() {
        if (!DbService.instance) {
            DbService.instance = new DbService();
        }
        return DbService.instance;
    }
//** USERS APIs */    
    // return a promise to all Users 
    getUsers() {
        return httpService(`${config.dbApiUrl}/users`, 'GET');
    }
    // return a promise to all Users of a group 
    getUsersByGroup(groupId) {
        return new Promise((resolve, reject) => {
            httpService(`${config.dbApiUrl}/users`, 'GET').then(
                data => {
                    const users = data || [];
                    const groupUsers = users.filter(user => user.groupIds.includes(groupId));
                    resolve(groupUsers);
                },
                err => {
                    reject(err);
                }
            );
        });
    }
    // return a promise to a User with an id 
    getUserById(userId) {
        return httpService(`${config.dbApiUrl}/users/${userId}`, 'GET');
    }
    // POST API to create a new User
    addUser(user) {
        return new Promise((resolve, reject) => {
            this.getGroups().then(
                data => {
                    const groups = data || [];
                    const availableGroupIds = [];
                    groups.map(grp => availableGroupIds.push(grp.id));
                    //Validates the Usergroup ids if they are available in the database.
                    const isInValidGroups = user.groupIds.some(grpId => !availableGroupIds.includes(grpId));
                    if (isInValidGroups === true) {
                        reject({status: 400, message: 'One or more of the User groups does not exist.'});
                    } else {
                        //TODO: Few Validation should go here, like duplicate etc.
                        httpService(`${config.dbApiUrl}/users`, 'POST', user).then(
                            data => resolve(data),
                            err => reject(err)
                        );
                    }
                },
                err => reject(err)
            )
        });        
    }

    // PUT API to update a User
    updateUser(user) {
        return new Promise((resolve, reject) => {
            this.getGroups().then(
                data => {
                    const groups = data || [];
                    const availableGroupIds = [];
                    groups.map(grp => availableGroupIds.push(grp.id));
                    //Validates the Usergroup ids if they are available in the database.
                    const isInValidGroups = user.groupIds.some(grpId => !availableGroupIds.includes(grpId));
                    if (isInValidGroups === true) {
                        reject({status: 400, message: 'One or more of the User groups does not exist.'});
                    } else {
                        //TODO: Few Validation should go here, like duplicate etc.
                        httpService(`${config.dbApiUrl}/users/${user.id}`, 'PUT', user).then(
                            data => resolve(data),
                            err => reject(err)
                        );
                    }
                },
                err => reject(err)
            )
        });        
    }

    // DELETE API to Delete a User and remove its memberships.
    deleteUser(userId) {
        return httpService(`${config.dbApiUrl}/users/${userId}`, 'DELETE');     
    }

//** GROUPS APIs */    
    // return a promise to all Groups 
    getGroups() {
        return httpService(`${config.dbApiUrl}/groups`, 'GET');
    }
    // return a promise to the all Groups belongs to a user.
    getGroupsByUser(userId) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getGroups(), this.getUserById(userId)])
            .then(
                data => {
                    const groups = data[0] || [];
                    const user = data[1] || {};
                    const userGroups = groups.filter(group => user.groupIds.includes(group.id));
                    resolve(userGroups);
                },
                err => reject(err) 
            )
        });        
    }
    // return a promise to the group.
    getGroupById(groupId) {
        return httpService(`${config.dbApiUrl}/groups/${groupId}`, 'GET');
    }
    
    // POST API to create a new Group
    addGroup(group) {
        //TODO: Few Validation should go here, like name duplicate etc.
        return httpService(`${config.dbApiUrl}/groups`, 'POST', group);
    }

    // PUT API to update a Group
    updateGroup(group) {
        //TODO: Few Validation should go here, like name duplicate etc.
        return httpService(`${config.dbApiUrl}/groups/${group.id}`, 'PUT', group);
    }

    // DELETE API to delete a Group
    deleteGroup(groupId) {
        return new Promise((resolve, reject) => {
            // validates if group does not has Members and is empty before deleting it.
            this.getUsersByGroup(groupId).then(
                data => {
                    const groupUsers = data || [];
                    if (groupUsers.length > 0) {
                        reject({status: 400, message: 'Can not delete group as it has members', data: groupUsers});
                    } else {
                        httpService(`${config.dbApiUrl}/groups/${groupId}`, 'DELETE').then(
                            data => resolve(data),
                            err => reject(err)
                        );
                    }
                },
                err => reject(err)
            );
        });        
    }
}

module.exports = DbService.getInstance();