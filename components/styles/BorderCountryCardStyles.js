import styled from 'styled-components';

const CountryCardStyles = styled.div`
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
    background: #fff;
    padding: 20px;
    border: 1px solid #dedede; /* Maybe desktop only */
    
    div {
        text-align: left;
        line-height: 1.5;
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
`;

export default CountryCardStyles;