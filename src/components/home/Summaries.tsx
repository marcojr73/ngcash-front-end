import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import styled from "styled-components"
import getLastTransactionsByfilters from "../../api/summariesApi"
import { Itransaction } from "../../models/models"
import { Isummaries } from "../../models/models"
import Filters from "./Filters"
import Transaction from "./Transaction"


function Summaries(){

    const [summaries, setSummaries] = useState<Isummaries | []>([])
    const [initial, setInitial] = useState<Date>()
    const [final, setFinal] = useState<Date>()
    const [type, setType] = useState<"cashin" | "cashout">()
    

    useEffect(()=>{
        (async function (){
            try {
                await getLastTransactionsByfilters(setSummaries)
            } catch (error) {
                toast.error("Erro de conexão")
            }
          })();
    },[])

    return(
        summaries.length === 0 ?
        <ContainerSummaries>
            <h1>Extratos de transferências</h1>
            <Filters setSummaries={setSummaries}/>
            <h2>Você ainda não realizou nenhuma transferência</h2>
        </ContainerSummaries>
        :
        <ContainerSummaries>
            <h1>Extratos de transferências</h1>
            <Filters setSummaries={setSummaries}/>
            {
                summaries.map((transaction, index) => {
                    return(
                        <Transaction transaction={transaction} key={index}/>
                    )
                })
            }
        </ContainerSummaries>

    )
}

export default Summaries

const ContainerSummaries = styled.section`
    width: 50vw;
    height: 100vh;
    background-color: var(--third-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;

    h1{
        margin-top: 15vh;
        font-size: 75px;
        font-weight: bold;
        margin-bottom: 4%;
    }

    h2{
        margin-top: 20%;
    }

    @media only screen and (max-width: 514px){
        width: 100vw;

        h1{
            font-size: 40px;
        }
    }
    
`