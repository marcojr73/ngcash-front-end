import { useState } from "react"
import styled from "styled-components"
import getLastTransactionsByfilters from "../../api/summariesApi"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

function Filters({setSummaries}: {setSummaries: any}) {
    const [initial, setInitial] = useState<string>()
    const [final, setFinal] = useState<string>()
    const [type, setType] = useState<"cashin" | "cashout">()
    const [toggleDates, setToggleDates] = useState<"week" | "month">()
    const [initialDate, setInitialDate] = useState<Date>()
    const [finalDate, setFinalDate] = useState<Date>()

    function filterTypeTransaction(filter: "cashin" | "cashout"){
        if(type === filter) {
            setType(undefined)
            getLastTransactionsByfilters(setSummaries)
        }
        else {
            setType(filter)
            getLastTransactionsByfilters(setSummaries, initial, final, filter)
        }
    }

    function filterDateTransaction(filter: "week" | "month"){
        console.log(toggleDates, filter)
        if(toggleDates === filter) {
            setToggleDates(undefined)
            setInitial(undefined)
            setFinal(undefined)
            getLastTransactionsByfilters(setSummaries, undefined, undefined, type)
        }
        else {
            if(filter === "week"){
                const last7days = dayjs().subtract(7, "days").format()
                const now = dayjs().format()
                setInitial(last7days)
                setFinal(now)
                setToggleDates(filter)
                console.log(last7days)
                getLastTransactionsByfilters(setSummaries, last7days, now, type)
            }
            else {
                const last7days = dayjs().subtract(1, "month").format()
                const now = dayjs().format()
                setInitial(last7days)
                setFinal(now)
                setToggleDates(filter)
                getLastTransactionsByfilters(setSummaries, last7days, now, type)
            }
        } 
    }

    function filterBetweenDates(){
        const ans1 = dayjs(initialDate).format("YYYY-MM-DDTHH:mm:ssZ")
        const ans2 = dayjs(finalDate).format("YYYY-MM-DDTHH:mm:ssZ")
        setToggleDates(undefined)
        getLastTransactionsByfilters(setSummaries, ans1, ans2, type)
    }

    return (
        <ContainerFilters>
            <button className={type === "cashin" ? "active": "disable"} onClick={()=>filterTypeTransaction("cashin")}>CashIn</button>
            <button className={type === "cashout" ? "active": "disable"} onClick={()=>filterTypeTransaction("cashout")}>CashOut</button>
            <button className={toggleDates === "week" ? "active": "disable"} onClick={()=>filterDateTransaction("week")}>Ultima semana</button>
            <button className={toggleDates === "month" ? "active": "disable"} onClick={()=>filterDateTransaction("month")}>Ultimo mês</button>
            <div className="pick-dates">
                <DatePicker className="picker" selected={initialDate} onChange={(date: Date) => setInitialDate(date)} placeholderText="data inicial" />
                <DatePicker className="picker" selected={finalDate} onChange={(date: Date) => setFinalDate(date)} placeholderText="data final"/>
                <button onClick={filterBetweenDates} className="button-dates">Filtrar</button>
            </div>
        </ContainerFilters>
    )
}

export default Filters

const ContainerFilters = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;

    button, .disable {
        width: 200px;
        height: 50px;
        border-radius: 100px;
        border: none;
        font-size: 25px;
        margin-bottom: 6%;
    }

    .active{
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }

    .pick-dates{
        width: min-content;
        height: min-content;
    }

    .picker, .button-dates{
        width: 100px;
        height: 30px;
        border-radius: 0px;
    }
`