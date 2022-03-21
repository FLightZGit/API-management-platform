import axios from 'axios'

const axios_api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const createApi = payload => axios_api.post(`/api`, payload)
export const updateApi = (id, payload) => axios_api.put(`/api/${id}`, payload)
export const deleteApi = id => axios_api.delete(`/api/${id}`)
export const getApiById = id => axios_api.get(`/api/${id}`)
export const getApis = () => axios_api.get(`/apis`)

const axios_apis = {
    createApi,
    updateApi,
    deleteApi,
    getApis,
    getApiById,
}

export default axios_apis