import styled from "styled-components"
import { Itransaction } from "../../models/models"
import dayjs from "dayjs"

function Transaction({transaction}: {transaction: Itransaction}){

    const day = dayjs(transaction.createdAt).format("DD")
    const month = dayjs(transaction.createdAt).format("MMM")
    const year = dayjs(transaction.createdAt).format("YY")
    const cash = transaction.value.toFixed(2).replace(".", ",")
    const name = transaction.credited.Users[0].userName

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
                    <p className="name"><span>Enviado para </span>{name}</p>
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

    .name{
        font-size: 20px;
        position: absolute;
        right: 100px;
    }
`