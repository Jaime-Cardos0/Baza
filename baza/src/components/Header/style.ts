import styled from "styled-components";

export const Container = styled.header`
    /* background-color: var(--placeholder); */
    margin: 1.25rem 1.5rem 6rem;
`;

export const Menu = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.125rem 3rem;

    box-shadow: 0 1px 4px var(--menu-shadow);
    background-color: var(--menu-background);
    border-radius: 4rem;
    border-style: solid;
    border-width: 1px;
    border-color: var(--shapes) #131418 #131418 var(--shapes);

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &::before{
        content: "";
        width: 20%;
        height: 1px;
        position: absolute;
        top: -1px;
        right: 33%;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.0));
    }

    nav{
        a{
            font-size: 1rem;
            font-weight: 400;

            & + a{
                margin-left: 1.5rem;
            }
        }
    }

    button{
        background-color: var(--menu-button);
        color: var(--menu-text);
        font-family: var(--Roboto);
        border: 2px solid #17439b;
        border-radius: 0.625rem;
        padding: .625rem .875rem;
    }



`;