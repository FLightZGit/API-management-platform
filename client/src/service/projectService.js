import { axios_get, axios_post, axios_put, axios_delete } from "../util/request"

function getProjects() {
    return axios_get(`/projects`, '')
}

function getProjectById(id) {
    return axios_get(`/project/${id}`, '')
}

function createProject(params) {
    return axios_post(`/project`, params)
}

function updateProject(id, params) {
    return axios_put(`/project/${id}`, params)
}

function deleteProject(id) {
    return axios_delete(`/project/${id}`, '')
}

const project_requests = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
}

export default project_requests