import axiosInstance from "./axiosInstance"

async function getLastTransactionsByfilters(setSummaries: any, initial?: string, final?: string, type?: "cashin" | "cashout"){
    let filters = ""
    if(initial && final && !type) filters = `?initial=${initial}&final=${final}`
    if(!initial && !final && type) filters = `?type=${type}`
    if(initial && final && type) filters = `?initial=${initial}&final=${final}&type=${type}`
    const url = `http://localhost:5000/transactions/${filters}`
    const token: string | null = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axiosInstance.get(url, config)
        setSummaries(response.data.reverse())
    } catch (error) {
        console.log(error)
    }
}

export default getLastTransactionsByfilters