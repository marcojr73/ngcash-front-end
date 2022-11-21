import { Link } from "react-router-dom"
import styled from "styled-components"
import { AiFillEye } from "react-icons/ai"
import { useState } from "react"
import { ItypeInput } from "../../models/models"
import wallpaper from "../../assets/images/logo.gif"


type ItextButton = "Entrar" | "Criar conta" | JSX.Element


type ItextNavigate = "Não possui uma conta?" | "acessar minha conta"
type IrouteNavigate = "/" | "/sign-up"

function Form({ userName, password, setUserName, setPassword, event, textButton, textNavigate, routeNavigate }: 
    { userName: string, password: string, setUserName: any, setPassword: any, event: any, textButton: ItextButton, textNavigate: ItextNavigate, routeNavigate: IrouteNavigate}){

    const [ Type, setType ] = useState<ItypeInput>({text: "password"})

    return(
        <ContainerForm>
            <img src={wallpaper}/>
            <form onSubmit={event}>
                <div className="txt-mobile">
                    <h1>Ngcash</h1>
                    <h2>A carteira da nova geração</h2>
                </div>
                <input placeholder="Nome de usuário" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <div className="password">
                    <input type={Type.text} placeholder="Senha" pattern="/(?=.*?[A-Z])(?=.*?[0-9]){8}/" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <AiFillEye className="eye" onClick={() => Type.text === "password" ? setType({text: "text"}) : setType({text: "password"})}/>
                </div>
                <button>{textButton}</button>
                <Link to={routeNavigate}>{textNavigate}</Link>
            </form>
        </ContainerForm>
    )
}

export default Form

const ContainerForm = styled.section`
    width: 50vw;
    height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 30vw;
        height: 50vh;
        margin-bottom: 75px;
    }

    .txt-mobile{
        display: none;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        margin-bottom: 30px;
        width: 50vh;
        padding: 25px 25px 10px 10px;
        background-color: var(--primary-color);
        border-top: none;
        border-left: none;
        border-right: none;
        color: var(--secondary-color);
        font-size: 25px;
        color: var(--secondary-color);
    }

    input::placeholder{
        font-size: 25px;
        color: var(--secondary-color);
    }

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    button{
        width: 50%;
        height: 50px;
        border-radius: 100px;
        font-size: 35px;
        margin-top: 25px;
    }

    a{
        color: var(--secondary-color);
        margin-top: 15px;
    }

    .password{
        position: relative;
    }

    .eye{
        color: white;
        position: absolute;
        bottom: 45px;
        right: 10px;
        font-size: 25px;
        cursor: pointer;
    }
    @media only screen and (max-width: 514px){
        width: 100vw;

        input{
            width: 35vh;
        }
        .txt-mobile{
            color: var(--secondary-color);
            font-size: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 10%;
        }
    }
`