import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://ngcash-api.herokuapp.com"
})

export default axiosInstance