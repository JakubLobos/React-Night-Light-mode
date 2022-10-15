import styled from "styled-components"

export const ContentWrapper = styled.section`
    width: 300px;
    height: 300px;
    background-color: ${props => props.theme.background};
    opacity: 60%;
    padding: 10px;
    color: ${props => props.theme.fontColor};
    transition: .4s linear;
`