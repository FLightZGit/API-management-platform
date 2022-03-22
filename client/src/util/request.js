import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['auth'] = 'gettoken'
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

function axios_get(url, params) {
    return instance.get(url, params)
}

function axios_post(url, params) {
    return instance.post(url, params)
}

function axios_put(url, params) {
    return instance.put(url, params)
}

function axios_delete(url,params) {
    return instance.delete(url, params)
}

export { axios_get, axios_post, axios_put, axios_delete }

