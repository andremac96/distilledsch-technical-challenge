import styled from 'styled-components';

const CountryCardStyles = styled.main`

    .image-wrapper img {
        max-width: 100%;
    }

    margin: 20px;
    max-width: 320px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
    border-radius: 5px;
    padding: 15px 30px 30px 30px;
    position: relative;
    padding-bottom: 50px;

    .content {
        font-size: 18px;
        margin-top: 25px;
    }

    button {
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
`;

export default CountryCardStyles;