import styled from "styled-components";

export const EyebrowContainer = styled.div`
    margin: 0 auto;
    width: 21.65rem;
    height: 2rem;
    padding: 0 1.5rem;
    background: rgba(100, 100, 120, 0.2);
    border-radius: 3rem;
    box-shadow: 0 0 3px rgb(100, 100, 120);
    display: flex;
    gap: 0.750rem;
    align-items: center;
    justify-content: center;

    span{
        /* color: var(--menu-text); */
        font-weight: 300;
        font-size: 16px;
        font-family: var(--Poppins);
        background: linear-gradient(to right, var(--menu-text), rgba(255, 255, 255, .3));
        background-clip: text;
        color: transparent;
    }

`;