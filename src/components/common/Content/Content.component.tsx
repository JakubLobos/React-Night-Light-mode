import { ContentWrapper } from "./Content.style";
import { FC }  from "react";
import { Line } from "./line/Line.component";
// import { SetStateAction, useState } from "react"

export const Content: FC = () => {
    // const [handleTheme, setHandleTheme]: string | SetStateAction<any> = useState('dark')
    return (
        <ContentWrapper>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum velit dicta molestias, perspiciatis nemo error voluptatum obcaecati impedit temporibus aspernatur distinctio natus nobis alias accusantium architecto totam inventore. Ipsa!
            {/* <button onClick={ () => setHandleTheme(handleTheme === "light" ? 'dark' : "light") }>Zmien tryb</button> */}
            <Line />
        </ContentWrapper>
    )
}