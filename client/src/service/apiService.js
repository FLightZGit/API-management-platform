import { axios_get, axios_post, axios_put, axios_delete } from "../util/request"

function getApis(projectId) {
    return axios_get(`/${projectId}/apis`, '')
}

function getApiById(id) {
    return axios_get(`/api/${id}`, '')
}

function createApi(params) {
    return axios_post(`/api`, params)
}

function updateApi(id, params) {
    return axios_put(`/api/${id}`, params)
}

function deleteApi(id) {
    return axios_delete(`/api/${id}`, '')
}

const api_requests = {
    getApis,
    getApiById,
    createApi,
    updateApi,
    deleteApi,
}

export default api_requests