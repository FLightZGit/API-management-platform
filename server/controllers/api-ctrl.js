const Project = require('../models/project-model')

const getApis = async (ctx) => {
    const projectId = ctx.params.projectId
    const project = await Project.findById(projectId)

    const apis = await project.projectApis

    ctx.body = apis
}

const getApiById = async (ctx) => {
    const projectId = ctx.params.projectId
    const project = await Project.findById(projectId)

    const apiId = ctx.params.apiId
    const api = await project.projectApis.id(apiId)

    ctx.body = api
}

const createApi = async (ctx) => {
    const projectId = ctx.params.projectId
    const project = await Project.findById(projectId)

    await project.projectApis.push(ctx.request.body)
    await project.save()

    ctx.body = project
}

const updateApi = async (ctx) => {
    const body = ctx.request.body
    const projectId = ctx.params.projectId
    const project = await Project.findById(projectId)

    const apiId = ctx.params.apiId
    const api = await project.projectApis.id(apiId)

    api.apiName = body.apiName
    api.apiAdress = body.apiAdress
    api.apiRequestMethod = body.apiRequestMethod
    api.apiParameters = body.apiParameters
    api.apiResponse = body.apiResponse
    api.apiGroup = body.apiGroup
    api.apiCreatPerson = body.apiCreatPerson
    api.apiNote = body.apiNote

    const updatedApi = await api.save()
    ctx.body = updatedApi
}

const deleteApi = async (ctx) => {
    const projectId = ctx.params.projectId
    const project = await Project.findById(projectId)

    const apiId = ctx.params.apiId
    const api = await project.projectApis.id(apiId)

    await api.remove()
    await project.save()

    ctx.body = api
}


module.exports = {
    getApis,
    getApiById,
    createApi,
    updateApi,
    deleteApi,
}