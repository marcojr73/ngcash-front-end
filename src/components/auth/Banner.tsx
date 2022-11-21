import demo from "../../assets/images/demo.png"
import styled from "styled-components"

function Banner(){
    return(
      <ContainerBanner>
        <h1>Ngcash</h1>
        <h2>A carteira da nova geração</h2>
        <img src={demo}/>
      </ContainerBanner>  
    )
}

export default Banner

const ContainerBanner = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    width: 50vw;
    height: 100vh;

    h1, h2{
        color: var(--primary-color)
    }

    h1{
        margin-top: 10vh;
        font-size: 100px;
    }

    h2{
        font-size: 50px;
    }
    @media only screen and (max-width: 514px){
        display: none;
    }
`