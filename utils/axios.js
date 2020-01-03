import axios from 'axios'

export const get = (endpoint) => {
    return axios.get(endpoint)
}