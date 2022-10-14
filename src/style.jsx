import { FcBiohazard } from 'react-icons/fc'
import styled from "styled-components";

const sizes = {
    mobile : "480px",
    tablet : "768px",
    laptop : "1024px",
    desktop : "1201px"
}

export const Container = styled.div`

    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 5vh 95vh;


    @media screen and (min-device-width:${sizes.laptop}), screen and (max-width:${sizes.desktop}) {

        grid-template-areas: "h h"
                            "a m"
    
    }

    @media (max-width: ${sizes.laptop}) {

        grid-template-rows: 10vh 10vh 80vh;
        grid-template-areas: "h h"
                            "a a"
                            "m m"
    }

    @media (max-width: ${sizes.mobile}) {

        grid-template-columns: 100%;
        grid-template-rows: 10vh 10vh 80vh;
        grid-template-areas: "h"
                            "a"
                            "m"
    }
`;

export const Header = styled.header`

    background-color: red;
    grid-area: h;

`;

export const Aside = styled.aside`

    background-color: green;
    grid-area: a;

`;

export const Main = styled.main`

    scrollbar-width: none;
    overflow-y: scroll;

    background-image: url(${FcBiohazard});
    grid-area: m;

    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    align-items: center;
    padding: 30px;

    

`;

export const Footer = styled.footer`

    background-color: blue;
    grid-area: f;

`;