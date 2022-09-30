import styled from "styled-components";

export const StyledCountryList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    justify-items: center;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    @media (max-width: 975px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`