import BorderCountryCardStyles from '../styles/BorderCountryCardStyles';
import {numberWithCommas} from '../../lib/utils';

const BorderCountryCard = ({ country }) => {
    return (
        <BorderCountryCardStyles>
            <div className="image-wrapper-border-country">
                <img src={country.flag} />
            </div>
            
            <div><strong>{country.name.replace(/(\(.+\))/g, '')}</strong></div>
            <div>{numberWithCommas(country.population)}</div>
            <div>
                {country.regionalBlocs.length ? country.regionalBlocs.map((bloc, index) => (
                    <span key={index}>
                        {bloc.name}
                        {(country.regionalBlocs.length > 1 && (index != [country.regionalBlocs.length -1])) ? ', ' : null}
                     </span>
                )) : null}
            </div>
              {/* <button className="see-more">See More</button> */}
        </BorderCountryCardStyles>
    );
};

export default BorderCountryCard;