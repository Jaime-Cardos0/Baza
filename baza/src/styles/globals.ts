import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {

        /* cores */
            --shapes: #323238;

            --background: #0D0F10;

            /* menu */
            --menu-background: #17191C;
            --menu-button: #0F60FF;
            --menu-text: #FAFAFA;
            --menu-shadow: #26282E;
            --menu-gradient: linear-gradient( #37393C, #fff);

            /* Hero */
            --eyebrow: #313131;

            --btgoogle-text: #fff;
            --btgoogle-bg: #0b090d;

            /* fontes */

            --outfit: "Outfit", sans-serif;
            --Roboto: "Roboto", sans-serif;
            --Poppins: "Poppins", sans-serif;
        }

    *, *::after, *::before{
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: var(--outfit);
    }

    body {
    background: var(--background);
    }

    html {
        font-size: 16px;

        @media (max-width: 1080px) {
        font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media (max-width: 520px) {
            font-size: 75%;
        }
    }

    button {
        cursor: pointer;
        font-weight: 500;
        font-family: var(--Poppins);
    }

    a{
        text-decoration: none;
        color: #fafafa;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;