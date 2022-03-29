const api_router = require('koa-router')()

const ApiCtrl = require('../controllers/api-ctrl')

api_router.get('/project/:projectId/apis', ApiCtrl.getApis)
api_router.get('/project/:projectId/api/:apiId', ApiCtrl.getApiById)
api_router.post('/project/:projectId/api', ApiCtrl.createApi)
api_router.put('/project/:projectId/api/:apiId', ApiCtrl.updateApi)
api_router.delete('/project/:projectId/api/:apiId', ApiCtrl.deleteApi)

module.exports = api_router