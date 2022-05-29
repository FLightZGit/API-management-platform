import { axios_get, axios_post, axios_put, axios_delete } from "../util/request"

function getUsers() {
    return axios_get(`/users`, '')
}

function login(params) {
    return axios_post(`/login`,params)
} 

function getUserById(userId) {
    return axios_get(`/user/${userId}`, '')
}

function createUser(params) {
    return axios_post(`/register`, params)
}

function updateUser(userId, params) {
    return axios_put(`/user/${userId}`, params)
}

function deleteUser(userId) {
    return axios_delete(`/user/${userId}`, '')
}

const user_requests = {
    getUsers,
    login,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}

export default user_requests