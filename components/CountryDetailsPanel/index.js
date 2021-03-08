import CountryDetailsPanelStyles from '../styles/CountryDetailsPanelStyles';

import {numberWithCommas} from '../../lib/utils';

const CountryDetailsPanel = ({ capital, currencies, languages, name, population, regionalBlocs }) => {

    return (
        <CountryDetailsPanelStyles>
            <div><strong>{name}</strong></div>
            <div>Capital: {capital}</div>
            <div>Regional Blocs: {regionalBlocs.map(bloc => bloc.name)}</div>

            <div>Population: {numberWithCommas(population)}</div>
            <div>
                Currency: 
                {currencies.length ? currencies.map((currency, index) => (
                    <span key={index}>
                        {currency.code} ({currency.symbol})
                    </span>
                )) : null}
            </div>
            <div>
                Languages: 
                {languages.length ? languages.map((language, index) => (
                    <span key={index}>
                        {language.name} ({language.iso639_1})
                        {(languages.length > 1 && (index != [languages.length -1])) ? ', ' : null}
                    </span>
                )) : null}
            </div>
        </CountryDetailsPanelStyles>
    );
};

export default CountryDetailsPanel;