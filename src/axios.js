import axios from "axios"

const instance = axios.create({
    // baseURL: 'http://localhost:5001/clone-b6acf/us-central1/api/'
    baseURL: 'https://us-central1-clone-b6acf.cloudfunctions.net/api'

    //the api client url
})

export default instance