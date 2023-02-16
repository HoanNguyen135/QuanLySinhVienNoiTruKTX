import axios from 'axios'

const baseURL = 'http://192.168.1.9:8080/api'


export const api = {
    call : () => {
        return axios.create({
            baseURL
        })
    }
}
