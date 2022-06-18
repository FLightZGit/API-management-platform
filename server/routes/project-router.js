const project_router = require('koa-router')()

const ProjectCtrl = require('../controllers/project-ctrl')

project_router.get('/projects', ProjectCtrl.getProjects)
project_router.post('/projectname', ProjectCtrl.getProjectByProjectName)
project_router.get('/project/:username', ProjectCtrl.getProjectByUserName)
project_router.get('/project/:projectId', ProjectCtrl.getProjectById)
project_router.post('/project', ProjectCtrl.createProject)
project_router.put('/project/:projectId', ProjectCtrl.updateProject)
project_router.delete('/project/:projectId', ProjectCtrl.deleteProject)

module.exports = project_router