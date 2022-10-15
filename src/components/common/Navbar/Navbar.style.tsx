import styled from "styled-components"

export const StyledNavbar = styled.nav`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
    transition: .4s linear;
    justify-content: space-around;
    
    & a {
        text-decoration: none;
        color: ${props => props.theme.fontColor};
    }
`