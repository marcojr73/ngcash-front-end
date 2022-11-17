import Banner from "../components/auth/Banner"
import ContainerAuth from "../components/auth/ContainerAuth"
import Form from "../components/auth/Form"

function SignIn(){
    return(
        <ContainerAuth>
        <Banner/>
        <Form textButton="Entrar"/>
      </ContainerAuth>  
    )
}

export default SignIn