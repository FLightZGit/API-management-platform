const Api = require('../models/api-model')

const createApi = async (ctx, next) => {
    const newApi = new Api(ctx.request.body)
    const savedApi = await newApi.save()
    ctx.body = savedApi
}

const updateApi = async (ctx, next) => {
    const body = ctx.request.body
    const id = ctx.params.id
    const api = await Api.findById(id)

    api.apiName = body.apiName
    api.apiAdress = body.apiAdress
    api.apiRequestMethods = body.apiRequestMethods
    api.apiParameters = body.apiParameters
    api.apiResponses = body.apiResponses
    api.apiGroup = body.apiGroup
    api.apiCreatPerson = body.apiCreatPerson
    api.apiNote = body.apiNote

    const updatedApi = await api.save()
    ctx.body = updatedApi
}

const deleteApi = async (ctx, next) => {
    const id = ctx.params.id
    const api = await Api.findById(id)

    const deletedApi = await api.remove()
    ctx.body = deletedApi
}

const getApiById = async (ctx, next) => {
    const id = ctx.params.id
    const api = await Api.findById(id)

    ctx.body = api
}

const getApis = async (ctx, next) => {
    const apis = await Api.find({})
    ctx.body = apis
}


module.exports = {
    createApi,
    updateApi,
    deleteApi,
    getApis,
    getApiById,
}