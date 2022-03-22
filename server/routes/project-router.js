const project_router = require('koa-router')()

const ProjectCtrl = require('../controllers/project-ctrl')

project_router.post('/project', ProjectCtrl.createProject)
project_router.put('/project/:id', ProjectCtrl.updateProject)
project_router.delete('/project/:id', ProjectCtrl.deleteProject)
project_router.get('/project/:id', ProjectCtrl.getProjectById)
project_router.get('/projects', ProjectCtrl.getProjects)

module.exports = project_router