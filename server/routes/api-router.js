const api_router = require('koa-router')()

const ApiCtrl = require('../controllers/api-ctrl')

api_router.post('/api', ApiCtrl.createApi)
api_router.put('/api/:id', ApiCtrl.updateApi)
api_router.delete('/api/:id', ApiCtrl.deleteApi)
api_router.get('/api/:id', ApiCtrl.getApiById)
api_router.get('/apis', ApiCtrl.getApis)

module.exports = api_router