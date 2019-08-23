import axios from 'axios'

const baseURL = '/api'
const instance = axios.create({
    baseURL,
    timeout: 50000
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(
    config => {
        // const token = ''
        // config.headers['token'] = token
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    res => {
        return Promise.resolve(res)
    },
    error => {
        return Promise.reject(error)
    }
)

/** 
 * 封装 get
 *  
 */

/* export function fetch(url) {
    return new Promise((resolve, reject) => {
        instance
            .get(url)
            .then(response => resolve(response))
            .catch(err => reject(err));
    })
} */

/**
 * 封装 post
 * 
 */

/* export function post(url, data = {}) {
    console.log(data);
    
    return new Promise((resolve, reject) => {
        instance
            .post(url, data)
            .then(response => resolve(response))
            .catch(err => reject(err))
    })
} */

export default instance;