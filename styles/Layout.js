import styled from 'styled-components';

const Layout = styled.div`
    max-width: 1100px;
    margin: 0px auto;
    padding: 1rem;

    .wrapper {
        display: flex;
        justify-content: center;
        min-height: 100vh;
    }

    .country-card-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }

    @media (min-width: 768px) { 
        .country-card-wrapper {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 1024px) { 
        .country-card-wrapper {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

export default Layout;