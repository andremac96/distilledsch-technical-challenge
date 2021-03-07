import Link from 'next/link';
import CountryCardStyles from '../../styles/CountryCardStyles';

const CountryCard = ({ country: { name, capital, population, flag, regionalBlocs, currencies } }) => (
  <>
    <CountryCardStyles>
      <div className="country-row">
      <h2>{name}</h2>
        <div className="image-wrapper">
          <img src={flag} />
        </div>
        <div className="content">
          <div>{capital} | {population} people</div>
          <div>{regionalBlocs.map(bloc => bloc.name)} | Euro (€)</div>
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
);

export default CountryCard;
