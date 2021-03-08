import styled from 'styled-components';

const CountryPage = styled.div`
    h1 {
        font-size: 48px;
        text-align: left;
    }

    .image-wrapper {
        display: block;
        text-align: center;
        img {    
            max-height: 120px;
            width: 180px;
        }
    }

    @media (min-width: 768px) { 
        .image-wrapper img {
            max-height: 100%;
            width: 250px;
        } 
    }

    button {
        background-color: #17a974;
        border: none;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-size: 18px;
        margin-bottom: 25px;
        padding: 8px 15px;
        width: 100px;
    }

    .see-more {
        background-color: #17a974;
        bottom: 0;
        border: none;
        color: white;
        cursor: pointer;
        display: block;
        font-size: 18px;
        left: 0;
        padding: 8px 15px;
        position: absolute;
        width: 100%;
    }

    .border-countries {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr;
        text-align: center;
    }
`;

export default CountryPage;