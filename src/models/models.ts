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

interface ItypeInput {
    text: "password" | "text" 
}


export type {
    Iauth,
    Itransaction,
    Isummaries,
    Ibalance,
    Iuser,
    ItypeInput
}