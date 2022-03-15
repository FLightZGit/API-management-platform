const router = require('koa-router')()

const ApiCtrl = require('../controllers/api-ctrl')

router.post('/api', ApiCtrl.createApi)
router.put('/api/:id', ApiCtrl.updateApi)
router.delete('/api/:id', ApiCtrl.deleteApi)
router.get('/api/:id', ApiCtrl.getApiById)
router.get('/apis', ApiCtrl.getApis)

module.exports = router