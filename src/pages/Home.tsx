import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Account from "../components/home/Account"
import Header from "../components/home/Header"
import Summaries from "../components/home/Summaries"
import styled from "styled-components"

function Home(){

    return(
        <ContainerHome>
            <Header/>
            <Summaries/>
            <Account/>
        </ContainerHome>
    )
}

export default Home

const ContainerHome = styled.main`
    display: flex;
`