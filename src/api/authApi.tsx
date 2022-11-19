import { Iauth } from "../models/models"
import axiosInstance from "./axiosInstance"

async function signIn(url: string, data: Iauth){
        const response = await axiosInstance.post(url, data)
        localStorage.setItem("token", response.data)
}

async function signUp(url: string, data: Iauth) {
    await axiosInstance.post(url, data)
}

export  {
    signIn,
    signUp
}   