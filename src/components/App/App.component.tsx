import { ThemeProvider } from "styled-components"
import { SetStateAction, useState } from "react"
import { themes } from "../styles/themes"
import { Navbar } from "../common/Navbar/Navbar.component"
import { Content } from "../common/Content/Content.component"
import GlobalStyle from "../styles/global.style"

const App = () => {
    const [handleTheme, setHandleTheme]:string | SetStateAction<any> = useState('dark')
    console.log(handleTheme)
    return (
        <ThemeProvider theme={themes[handleTheme]}>
            <GlobalStyle />
            <Navbar />
            <Content />  
            <button onClick={ () => setHandleTheme(handleTheme === "light" ? 'dark' : "light") }>Zmien tryb</button>
        </ThemeProvider>
    )
}

export default App