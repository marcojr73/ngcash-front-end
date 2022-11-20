import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {signIn} from "../api/authApi"
import Banner from "../components/auth/Banner"
import ContainerAuth from "../components/auth/ContainerAuth"
import Form from "../components/auth/Form"
import { Iauth } from "../models/models"
import LoaderButton from "../utils/LoaderButton"

type ItextButton = "Entrar" | "Criar conta" | JSX.Element

function SignIn(){
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [textButton, setTextButton] = useState<ItextButton>("Entrar")
    const navigate = useNavigate()

    async function logInUser(e: { preventDefault: () => void }){
        e.preventDefault()
        try {
            setTextButton(LoaderButton)
            const url = "/sign-in"
            const data: Iauth = {userName, password}
            await signIn(url, data)
            toast.success("sucesso")
            navigate("/home")
        } catch (error) {
            setTextButton("Entrar")
            toast.error("Nome de usuário ou senha incorretos")
        }
    }

    return(
        <ContainerAuth>
        <Banner/>
        <Form userName={userName} password={password} setUserName={setUserName} setPassword={setPassword} event={logInUser} textButton={textButton} textNavigate="Não possui uma conta?" routeNavigate="/sign-up"/>
      </ContainerAuth>  
    )
}

export default SignIn