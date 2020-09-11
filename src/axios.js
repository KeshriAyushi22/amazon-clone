import axios from "axios"

const instance = axios.create({
    baseURL: ''  //the api client url
})

export default instance