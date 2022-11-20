import { useContext } from "react"
import { UserContext} from "../provider/UserProvider"
import axiosInstance from "./axiosInstance"

async function getBalanceUser(){
    const token: string | null = localStorage.getItem("token")
    const url = "http://localhost:5000/account"
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axiosInstance.get(url, config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    getBalanceUser
}