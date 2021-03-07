import styled from 'styled-components';

const CountryPage = styled.div`
    h1 {
        text-align: left;
        font-size: 48px;
    }

    .image-wrapper {
        display: block;
        text-align: center;
        img {    
            transition: opacity 0.5s linear;
            opacity: 1;
            width: 180px;
            max-height: 120px;
        }
    }

    .image-wrapper-border-country {
        /* display: block;
        text-align: center; */
        img {    
            transition: opacity 0.5s linear;
    opacity: 1;
    width: 100px;
    max-height: 120px;
        }
    }
    
    .country-details {
        border: 1px solid black;
        text-align: left;
        padding: 0;
        display: block;
        margin-top: 30px;
        width: 100%;
        div {
            line-height: 1.5;
        }
    }

    button {
        display: inline-block;
        width: 100px;
        background-color: #17a974;
        color: white;
        border: none;
        padding: 8px 15px;
        font-size: 18px;
        cursor: pointer;
        margin-bottom: 25px;
    }


    .border-countries {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        text-align: center;
    }

    .border-country {

    }
`;

export default CountryPage;