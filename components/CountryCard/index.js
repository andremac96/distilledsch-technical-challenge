import Link from 'next/link';
import CountryCardStyles from '../../styles/CountryCardStyles';

const CountryCard = ({ country: { name, capital, population, flag, regionalBlocs, currencies } }) => (
  <>
    {/* <Link
      href={{
        pathname: "/countries/[name]",
        query: { name: name.toLowerCase().replace(' ', '-') },
      }}
    ></Link> */}
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
      <button>See More</button>
      </CountryCardStyles>

   
    
  </>
);

export default CountryCard;
