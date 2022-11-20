import axiosInstance from "./axiosInstance"

async function getLastTransactionsByfilters(setSummaries: any, initial?: Date, final?: Date, type?: String){
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
        setSummaries(response.data)
    } catch (error) {
        console.log(error)
    }
}

export default getLastTransactionsByfilters