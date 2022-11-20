import styled from "styled-components"

import logo from "../../assets/images/logo.gif"

function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logo" />
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    background-color: var(--primary-color);
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1;

    img {
        height: 10vh;
    }
`