import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin: 1rem 0 0;
`;

export const Card = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid var(--shapes);
    background-color: var(--btgoogle-bg);
    border-radius: 0.750rem;
    padding: 0.25rem 1rem;
    /* gap: 0.25rem; */

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span{
            color: var(--btgoogle-text);

            & + span{
                font-size: 28px;
            }
        }
    }
`;