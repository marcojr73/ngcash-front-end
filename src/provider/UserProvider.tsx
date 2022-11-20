import react, { ReactNode, useState } from "react";
import { Ibalance } from "../models/models";


type IUserContextProps = {
    children: ReactNode
}

type Iuser = {
    user: {
        userName: string
        balance: number
    }
    setUser: (newState: {
        userName: string
        balance: number
    }) => void
}

const value = {
    user: {
        userName: "",
        balance: 0
    },
    setUser: () => {}
}

export const UserContext = react.createContext<Iuser>(value)

export const UserContextProvider = ({children}: IUserContextProps) => {
    const [user, setUser] = useState(value.user)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
