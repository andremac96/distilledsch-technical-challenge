import styled from 'styled-components';

const LayoutStyles = styled.div`
    max-width: 1100px;
    margin: 0px auto;
    padding: 1rem;
    background-color: #${props => props.background || "fafafa"};
    
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

    .search {
        text-align: center;

        input {
            font-size: 18px;
            margin-bottom: 1rem;
            padding: 0.50rem 0;
            width: 75%;
        }

        @media (min-width: 1024px) { 
            input {
                width: 33%;
            }
        }
    }
`;

export default LayoutStyles;