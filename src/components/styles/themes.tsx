interface styleThemeProps {
    background: string,
    fontColor: string,
    bodyBackgroundColor: string;
}

const lightTheme: styleThemeProps = {
    bodyBackgroundColor: "#D3D3D3",
    background: "white",
    fontColor: "#1b1b1b"
}

const darkTheme: styleThemeProps = {
    bodyBackgroundColor: "#1b1b1b9b",
    background: "#1b1b1b",
    fontColor: "#fff"
    
}

export const themes = {
    light: lightTheme,
    dark: darkTheme,
} as any;
// dalem any bo nie wiem jaki typ tu przypisać :((