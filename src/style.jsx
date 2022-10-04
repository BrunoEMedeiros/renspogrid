
import styled from "styled-components";

const sizes = {
    mobile : "480px",
    tablet : "768px",
    laptop : "1024px",
    desktop : "1200px"
}

export const Container = styled.div`

    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: 20vh 70vh 10vh;
    grid-template-areas: "h h"
                        "a m"
                        "f f";
`;

export const Header = styled.header`

    background-color: red;
    grid-area: h;

`;

export const Aside = styled.aside`

    background-color: brown;
    grid-area: a;

`;

export const Main = styled.main`

    background-color: yellow;
    grid-area: m;

`;

export const Footer = styled.footer`

    background-color: blue;
    grid-area: f;

`;