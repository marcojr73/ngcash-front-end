import Banner from "../components/auth/Banner"
import Form from "../components/auth/Form"
import ContainerAuth from "../components/auth/ContainerAuth"
import { useState } from "react"
import { Iauth } from "../models/models"
import { signUp } from "../api/authApi"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import LoaderButton from "../utils/LoaderButton"

type ItextButton = "Entrar" | "Criar conta" | JSX.Element

function SignUp(){

    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [textButton, setTextButton] = useState<ItextButton>("Criar conta")
    const  navigate = useNavigate()

    async function registerUser(e: { preventDefault: () => void }){
      try {
        e.preventDefault()
        setTextButton(LoaderButton)
        const url = "/sign-up"
        const data: Iauth = {userName, password}
        await signUp(url, data)
        toast.success("sucesso")
        navigate("/")
      } catch (error) {
        setTextButton("Criar conta")
        toast.error("usuário já em uso ou formato de senha inválido")
      }
    }
    return(
      <ContainerAuth>
        <Banner/>
        <Form userName={userName} password={password} setUserName={setUserName} setPassword={setPassword} event={registerUser} textButton={textButton} textNavigate="acessar minha conta" routeNavigate="/"/>
      </ContainerAuth>  
    )
}

export default SignUp
