import { axios_get, axios_post, axios_put, axios_delete } from "../util/request"

function getProjects() {
    return axios_get(`/projects`, '')
}

function getProjectByProjectName(params) {
    return axios_post(`/projectname`, params)
}

function getProjectByUserName(username) {
    return axios_get(`/project/${username}`, '')
}

function getProjectById(projectId) {
    return axios_get(`/project/${projectId}`, '')
}

function createProject(params) {
    return axios_post(`/project`, params)
}

function updateProject(projectId, params) {
    return axios_put(`/project/${projectId}`, params)
}

function deleteProject(projectId) {
    return axios_delete(`/project/${projectId}`, '')
}

const project_requests = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    getProjectByUserName,
    getProjectByProjectName
}

export default project_requests