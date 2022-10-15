import styled from "styled-components";

export const StyledLine = styled.span`
    display: block;
    min-width: 30px;
    min-height: 2px;
    background-color: ${props => props.theme.fontColor};
`