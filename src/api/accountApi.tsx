import { useContext } from "react"
import { IsendTransaction } from "../models/models"
import { UserContext} from "../provider/UserProvider"
import axiosInstance from "./axiosInstance"

async function getBalanceUser(){
    const token: string | null = localStorage.getItem("token")
    const url = "/account"
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

async function sendTransaction(data: IsendTransaction){
    const token: string | null = localStorage.getItem("token")
    const url = "/transaction"
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    try {
        await axiosInstance.post(url, data, config)
    } catch (error) {
        console.log(error)
    }
}

export {
    getBalanceUser,
    sendTransaction
}