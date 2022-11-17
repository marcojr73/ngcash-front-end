import { Link } from "react-router-dom"
import styled from "styled-components"
import wallpaper from "../../assets/images/wallpaperunniverse.jpg"
import { AiFillEye } from "react-icons/ai"
import { useState } from "react"


interface Itype {
    text: "password" | "text"
}

function Form({ textButton }: {textButton: string}){
    const [ Type, setType ] = useState<Itype>({text: "password"})

    return(
        <ContainerForm>
            <img src={wallpaper} alt="wallpaper" />
            <form>
                <input placeholder="Nome de usuário"/>
                <div className="password">
                    <input type={Type.text} placeholder="Senha"/>
                    <AiFillEye className="eye" onClick={() => Type.text === "password" ? setType({text: "text"}) : setType({text: "password"})}/>
                </div>
                <button>{textButton}</button>
                <Link to="/">acessar minha conta</Link>
            </form>
        </ContainerForm>
    )
}

export default Form

const ContainerForm = styled.section`
    width: 50vw;
    height: 100vh;
    background-color: var(--primary-color);

    img{
        width: 50vw;
        height: 50vh;
        margin-bottom: 75px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        margin-bottom: 30px;
        width: 500px;
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
        width: 500px;
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

`