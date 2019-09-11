const express = require('express');
const db = require('../services/db-service');
const apiRouter = express.Router();
const sendError = (res, err) => {        
    res.status(err.status || 400).send(err.message);
    res.end();
};

apiRouter.get('/', (req, res) => {
    res.sendStatus(404);
    res.end();
});

apiRouter.get('/users', (req, res) => {
    db.getUsers().then(users => {
        res.json(users);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.get('/users/:id', (req, res) => {
    const id = req.params.id;
    db.getUserById(id).then(user => {
        res.json(user);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.get('/usersbygroup/:id', (req, res) => {
    const groupId = req.params.id;
    db.getUsersByGroup(groupId).then(users => {
        res.json(users);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.get('/groups', (req, res) => {
    db.getGroups().then(groups => {
        res.json(groups);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.get('/groups/:id', (req, res) => {
    const groupId = req.params.id;
    db.getGroupById(groupId).then(group => {
        res.json(group);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.get('/groupsbyuser/:id', (req, res) => {
    const userId = req.params.id;
    db.getGroupsByUser(userId).then(groups => {
        res.json(groups);
        res.end();
    }, (err) => sendError(res, err));
});

//**** Post APIs
apiRouter.post('/users', (req, res) => {
    const user = req.body;
    db.addUser(user).then(data => {
        res.json(data);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.post('/groups', (req, res) => {
    const group = req.body;
    db.addUser(group).then(data => {
        res.json(data);
        res.end();
    }, (err) => sendError(res, err));
});

//**** UPDATE APIs
apiRouter.put('/users/:id', (req, res) => {
    const user = req.body;
    const id = req.params.id;
    if (!id || user.id != id) {
        res.sendStatus(404);
        res.end();
        return;
    }
    db.updateUser(user).then(data => {
        res.json(data);
        res.end();
    }, (err) => sendError(res, err));    
});

apiRouter.put('/groups/:id', (req, res) => {
    const group = req.body;
    const id = req.params.id;
    if (!id || group.id != id) {
        res.sendStatus(404);
        res.end();
        return;
    }
    db.updateGroup(group).then(data => {
        res.json(data);
        res.end();
    }, (err) => sendError(res, err));
});


//**** DELETE APIs
apiRouter.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.deleteUser(id).then(data => {
        res.json(data);
        res.end();
    }, (err) => sendError(res, err));
});

apiRouter.delete('/groups/:id', (req, res) => {
    const id = req.params.id;
    db.deleteGroup(id).then(data => {
        res.json(data);
        res.end();
    }, (err) => sendError(res, err));
});
module.exports = apiRouter;