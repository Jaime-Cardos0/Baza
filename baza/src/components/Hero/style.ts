import styled from "styled-components";
import FundoHero from "../../../public/images/Swatch.png"

export const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    padding: 0 10rem;
    background-image: url('../../../public/images/Swatch.png');

    h1{
        background: linear-gradient(to top, gray, var(--menu-text));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 4rem;
        font-weight: 500;
        margin: 0rem 2rem 0;
        text-align: center;
        line-height: 5.5rem;
        letter-spacing: 4px;
    }

    p{
        font-size: 18px;
        color: var(--menu-text);
        font-weight: 200;
        text-align: center;
        margin: 0 16rem 0;

        span{
            font-weight: 300;
            letter-spacing: 0.5px;
        }
    }

    div{
        display: flex;
        gap: 0 1.25rem;
    }
`;