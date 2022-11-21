import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components"
import { getBalanceUser, sendTransaction } from "../../api/accountApi";
import { UserContext } from "../../provider/UserProvider";
import { IoMdExit } from "react-icons/io"
import { AiFillEye } from "react-icons/ai"
import LoaderButton from "../../utils/LoaderButton";
import { useNavigate } from "react-router-dom";


function Account(){

    const {user, setUser} = useContext(UserContext)
    const [ blur, setblur ] = useState("")
    const [to, setTo] = useState("")
    const [value, setValue] = useState<number>()
    const [textButton, setTextButton] = useState<string | JSX.Element>("Transferir")
    const navigate = useNavigate()

    useEffect(()=>{
        (async function (){
            try {
                setUser(await getBalanceUser())
            } catch (error) {
                toast.error("Erro de conexão")
            }
          })();
    },[])

    async function newTransaction(e: { preventDefault: () => void; }){
        e.preventDefault()
        if(value && to) {
            setTextButton(<LoaderButton/>)
            const data = {
                userName: to,
                value: value*100
            }
            try {
                await sendTransaction(data)
                setUser(await getBalanceUser())
                toast.success("sucesso")
                setTextButton("Transferir")
            } catch (error) {
                setTextButton("Transferir")
                toast.error("Falha ao enviar a transação, tente novamente mais tarde")
            }
        } else {
            toast.error("preencha corretamente os campos")
        }
    }

    function exit(){
        localStorage.setItem("token", "")
        navigate("/")
    }

    return(
        user.userName === "" ?
        <>Carregando</>
        :
        <ContainerAccount>
            <section className="userName">
                <h1>@{user.userName}</h1>
                <div onClick={exit} className="exit">
                    <IoMdExit className="icon-exit"/>
                    <p className="text-exit">Sair</p>
                </div>
            </section>
            
            <section className="balance">
                <p className={`value ${blur}`}>R$ {(user.balance*0.01).toFixed(2).replace(".", ",")}</p>
                <AiFillEye onClick={()=>blur === "" ? setblur("blur") : setblur("")} className="eye"/>
            </section>

            <form onSubmit={newTransaction} className="send">
                <input value={to} onChange={(e) => setTo(e.target.value)} type="text" placeholder="Enviar Para" />
                <input value={value} step="0.01" onChange={(e) => setValue(parseFloat(e.target.value))} type="number" placeholder="Valor em R$" />
                <button>{textButton}</button>
            </form>

        </ContainerAccount>
    )
}

export default Account

const ContainerAccount = styled.section`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .userName {
        display: flex;
        font-size: 65px;
        align-items: center;
        justify-content: center;
        margin-top: 20vh;
    }

    .exit{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50px;
        margin-left: 30px;
    }

    .icon-exit{
        font-size: 45px;
    }

    .text-exit{
        font-size: 20px;
    }
    
    .balance{
        margin-top: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 200px;
        border-radius: 100px;
        background-color: var(--third-color);
    }

    .value {
        font-size: 40px;
        margin-right: 2%;
    }

    .blur {
        filter: blur(7px)
    }

    .eye {
        font-size: 45px;
    }

    .send {
        margin-top: 10vh;
        width: 60%;
        height: 100%;
        background-color: var(--third-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
    }

    input {
        width: 75%;
        height: 10%;
        margin-bottom: 80px;
        padding: 25px 25px 10px 10px;
        background-color: var(--third-color);
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 3px solid var(--primary-color);
        color: var(--secondary-color);
        font-size: 25px;
        color: var(--primary-color);
    }

    input::placeholder{
        color: var(--primary-color);
    }

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    button {
        width: 50%;
        height: 10%;
        border: none;
        border-radius: 100px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-size: 35px;
    }

    @media only screen and (max-width: 514px){
        width: 100vw;

        .send{
            width: 100%;
        }

        button{
            width: 77%;
        }
    }

`