import styled from 'styled-components';

const CountryPage = styled.div`
    h1 {
        text-align: left;
        font-size: 48px;
    }

    hr {
        width: 25%;
        text-align: left;
        margin-left: 0;
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

    @media (min-width: 768px) { 
        .image-wrapper img {
            max-height: 100%;
            width: 250px;
        } 
    }

    .image-wrapper-border-country {
        margin-bottom: 20px;
        img {    
            width: 100px;
            height: 60px;
        }
    }

    @media (min-width: 1024px) {  
        .image-wrapper-border-country img {
            width: 225px;
            height: 150px;
        }
    }

    .country-details {
        text-align: left;
        padding: 20px 0 20px 20px;
        display: block;
        margin-top: 30px;
        width: 100%;
        background: #fff;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
        border-radius: 5px;

        border: 1px solid #dedede; /* Maybe desktop only */
        div {
            line-height: 1.5;
            font-size: 18px;
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

    .see-more {
        display: block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #17a974;
        color: white;
        border: none;
        padding: 8px 15px;
        font-size: 18px;
        cursor: pointer;
    }

    .border-countries {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        text-align: center;
    }

    .border-country {
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
        background: #fff;
        padding: 20px;
        border: 1px solid #dedede; /* Maybe desktop only */
        div {
            text-align: left;
            line-height: 1.5;
        }
    }
`;

export default CountryPage;