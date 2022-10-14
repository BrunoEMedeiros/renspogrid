import styled from "styled-components";

const sizes = {
    mobile : "480px",
    tablet : "768px",
    laptop : "1024px",
    desktop : "1201px"
}

export const C_Card = styled.div`
      
        border-radius: 10%;

        padding: 3rem;

        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

`;

export const Header = styled.img`

        width: 80%;    
        border-radius: 10%;
        box-shadow: 7px 9px 3px 0px rgba(0,0,0,0.75);

`;

export const Title = styled.div`
    
    font-size: 5rem;
`

export const Options = styled.div`
    
    font-size: 2.2rem;

`