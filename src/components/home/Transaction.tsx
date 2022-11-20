import styled from "styled-components"
import { Itransaction } from "../../models/models"
import dayjs from "dayjs"
import { UserContext } from "../../provider/UserProvider"
import { useContext } from "react"

function Transaction({transaction}: {transaction: Itransaction}){

    const day = dayjs(transaction.createdAt).format("DD")
    const month = dayjs(transaction.createdAt).format("MMM")
    const year = dayjs(transaction.createdAt).format("YY")
    const cash = (transaction.value * 0.01).toFixed(2).replace(".", ",")
    const credited = transaction.credited.Users[0].userName
    const debited = transaction.debited.Users[0].userName
    const {user} = useContext(UserContext)

    return(
        <CardTransaction>
            <div className="line"></div>
                <div className="box">
                    <div className="date">
                        <p>{day}</p>
                        <p>{month}</p>
                        <p>{year}</p>
                    </div>
                    <p className="value">{`R$ ${cash}`}</p>
                    {user.userName === credited ? <p className="credited">Recebido de {debited}</p> : <p className="debited">Enviado para {credited}</p>}
                </div>
            <div className="line"></div>
        </CardTransaction>
    )
}

export default Transaction

const CardTransaction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1vh;

    .line{
        background-color: var(--primary-color);
        width: 50vw;
        height: 1px;
    }

    .box{
        display: flex;
        align-items: center;
        position: relative;
    }

    .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 100px;
    }

    .value {
        font-size: 30px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: fit-content;
    }

    .credited, .debited{
        font-size: 20px;
        position: absolute;
        right: 100px;
    }

    .credited{
        color: green
    }

    .debited{
        color: red
    }
`