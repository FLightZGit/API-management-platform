const user_router = require('koa-router')()

const UserCtrl = require('../controllers/user-ctrl')

user_router.get('/users', UserCtrl.getUsers)
user_router.post('/login', UserCtrl.login)
user_router.post('/updatePassword', UserCtrl.updatePassword)
user_router.get('/user/:userId', UserCtrl.getUserById)
user_router.post('/register', UserCtrl.createUser)
user_router.put('/user/:userId', UserCtrl.updateUser)
user_router.delete('/user/:userId', UserCtrl.deleteUser)

module.exports = user_router