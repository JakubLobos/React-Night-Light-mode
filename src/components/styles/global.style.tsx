import { createGlobalStyle } from "styled-components"
import { themes } from "./themes"

const GlobalStyle = createGlobalStyle<{theme: typeof themes}>`
    body { 
        padding: 0;
        margin: 0;
        background-color: ${props => props.theme.bodyBackgroundColor};
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
    }
`

export default GlobalStyle