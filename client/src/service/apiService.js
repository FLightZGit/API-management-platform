import { axios_get, axios_post, axios_put, axios_delete } from "../util/request"

function getApis(projectId) {
    return axios_get(`/project/${projectId}/apis`, '')
}

function getApiById(projectId, apiId) {
    return axios_get(`/project/${projectId}/api/${apiId}`, '')
}

function createApi(projectId, params) {
    return axios_post(`/project/${projectId}/api`, params)
}

function updateApi(projectId, apiId, params) {
    return axios_put(`/project/${projectId}/api/${apiId}`, params)
}

function deleteApi(projectId, apiId) {
    return axios_delete(`/project/${projectId}/api/${apiId}`, '')
}

const api_requests = {
    getApis,
    getApiById,
    createApi,
    updateApi,
    deleteApi,
}

export default api_requests