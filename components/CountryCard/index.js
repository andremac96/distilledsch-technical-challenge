import CountryCardStyles from '../styles/CountryCardStyles';
import {numberWithCommas} from '../../lib/utils';
import Link from 'next/link';

const CountryCard = ({ country: { name, capital, population, flag, regionalBlocs, currencies } }) => {
  return (
    <>
      <CountryCardStyles>
        <div className="country-row">
          <h2 className="country-name">{name}</h2>
          <div className="image-wrapper">
            <img src={flag} />
          </div>
          <div className="content country-information">
            <div>
              {capital ? <span><i className="fa fa-flag" aria-hidden="true"></i>{capital}</span> : null } 
            </div>
            <div>
              {currencies.length ? <span><i className="fa fa-money-bill-alt" aria-hidden="true"></i>{currencies[0].code} {currencies[0].symbol ? `(${currencies[0].symbol})` : null}</span>: null}
            </div>
            <div>
              {population ? <span><i className="fa fa-user" aria-hidden="true"></i>{numberWithCommas(population)}</span> : null }
            </div>
          </div>
        </div>
        <div className="buttonList">
          <Link
            href={{
              pathname: "/countries/[name]",
              query: { name: name.toLowerCase().replace(' ', '-') },
            }}
          >
            <button>See More</button>
          </Link>
        </div>
      </CountryCardStyles>  
    </>
  )
};

export default CountryCard;