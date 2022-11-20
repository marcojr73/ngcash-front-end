import styled from "styled-components"

function Filters() {
    return (
        <ContainerFilters>
            <button>CashIn</button>
            <button>CashOut</button>
            <button>Ultima semana</button>
            <button>Ultimo mês</button>
            <button>Selecionar data</button>
        </ContainerFilters>
    )
}

export default Filters

const ContainerFilters = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;

    button {
        width: 200px;
        height: 50px;
        border-radius: 100px;
        border: none;
        font-size: 25px;
        margin-bottom: 6%;
    }
`