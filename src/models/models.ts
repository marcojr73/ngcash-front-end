interface Iauth {
    userName: string
    password: string
}


type Isummaries = { 
    createdAt: Date 
    value: number 
    credited: { 
        Users: { 
            userName: String 
        }[] 
    } 
    debited: { 
        Users: { 
            userName: String 
        }[] 
    } 
}[]

type Itransaction = { 
    createdAt: Date 
    value: number 
    credited: { 
        Users: { 
            userName: String 
        }[] 
    } 
    debited: { 
        Users: { 
            userName: String 
        }[] 
    } 
}

type Ibalance = {
    userName: string, 
    balance: number
}

type Iuser = {    
    userName: string,
    balance: number
}

type IsendTransaction = {
	userName: string,
	value: number | undefined
}

interface ItypeInput {
    text: "password" | "text" 
}

interface typeInput {
    text: "password" | "text" 
}


export type {
    Iauth,
    Itransaction,
    Isummaries,
    Ibalance,
    Iuser,
    ItypeInput,
    IsendTransaction
}