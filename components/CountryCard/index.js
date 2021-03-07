import Link from 'next/link';
import CountryCardStyles from '../../styles/CountryCardStyles';
import {numberWithCommas} from '../../lib/utils';

const CountryCard = ({ country: { name, capital, population, flag, regionalBlocs, currencies } }) => {
  return (
    <>
      <CountryCardStyles>
        <div className="country-row">
        <h2>{name}</h2>
          <div className="image-wrapper">
            <img src={flag} />
          </div>
          <div className="content">
            <div>
              <i class="fa fa-flag" aria-hidden="true"></i>
              {capital ? ` ${capital} | ` : null } 
              <i class="fa fa-money" aria-hidden="true"></i>
              { currencies.length ? ` ${currencies[0].name}` : null}
            </div>
            <div>
              <i class="fa fa-user" aria-hidden="true"></i>
              {numberWithCommas(population)}
            </div>
          </div>
        </div>
        <Link
            href={{
              pathname: "/countries/[name]",
              query: { name: name.toLowerCase().replace(' ', '-') },
            }}
          >
          <button>See More</button>
        </Link>
      </CountryCardStyles>  
    </>
  )
};

export default CountryCard;