
import styled from "styled-components";

const sizes = {
    mobile : "480px",
    tablet : "768px",
    laptop : "1024px",
    desktop : "1201px"
}

export const Container = styled.div`

    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 20vh 80vh 10vh;


    @media screen and (min-device-width:${sizes.laptop}), screen and (max-width:${sizes.desktop}) {

        grid-template-areas: "h h"
                            "a m"
                            "f f";
    
    }

    @media (max-width: ${sizes.laptop}) {

        grid-template-rows: 20vh 10vh 70vh 10vh;
        grid-template-areas: "h h"
                            "a a"
                            "m m"
                            "f f";
    }

    @media (max-width: ${sizes.mobile}) {

        grid-template-columns: 100%;
        grid-template-rows: 20vh 10vh 70vh 10vh;
        grid-template-areas: "h"
                            "a"
                            "m"
                            "f";
    }
`;

export const Header = styled.header`

    position: fixed;
    height: 20vh;
    width: 100vw;
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