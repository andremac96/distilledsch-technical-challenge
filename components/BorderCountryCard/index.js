import BorderCountryCardStyles from '../styles/BorderCountryCardStyles';
import {numberWithCommas} from '../../lib/utils';
import Link from 'next/link';

const BorderCountryCard = ({ country }) => {
    return (
        <Link
            href={{
              pathname: "/countries/[name]",
              query: { name: country.name.toLowerCase().replace(' ', '-') },
            }}
          >
        <BorderCountryCardStyles>
            <div className="image-wrapper-border-country">
                <img src={country.flag} />
            </div>
            
            <div className="country-stats">
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
            </div>
              {/* <button className="see-more">See More</button> */}
        </BorderCountryCardStyles>
        </Link>
    );
};

export default BorderCountryCard;