import Banner from "../components/auth/Banner"
import Form from "../components/auth/Form"
import ContainerAuth from "../components/auth/ContainerAuth"

function SignUp(){
    return(
      <ContainerAuth>
        <Banner/>
        <Form textButton="Criar conta"/>
      </ContainerAuth>  
    )
}

export default SignUp
