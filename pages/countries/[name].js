import CountryPage from '../../styles/CountryPage';
import Layout from '../../styles/Layout';
import Link from 'next/link';

export default function Post({ country, borderCountries }) {
  return (
    <Layout>
      <CountryPage>
        <h1>Country App</h1>
        <Link
          href={{
            pathname: "/",
          }}
        >
        <button>Back</button>
      </Link>
        <div className="image-wrapper">
            <img src={country.flag} />
        </div>
        <div className="country-details">
          <div>Ireland</div>
          <div>Capital: Dublin</div>
          <div>Population: 4000000</div>
          <div>Currency: EUR</div>
          <div>Languages: Irish</div>
        </div>
        
        <h2>Borders:</h2>
        <div className="border-countries">
          {borderCountries.length
            ? borderCountries.map(country => (
            <div className="border-country">
              <div>{country.name}</div>
              <div>{country.population}</div>
              <div className="image-wrapper-border-country">
                <img src={country.flag} />
              </div>
            </div>
           )) : null}
        </div>
      </CountryPage>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const name = encodeURIComponent(context.params.name.replace('-', ' '));
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
  const countryRes = await res.json();

  const country = countryRes[0];

  if (!country) {
    return {
      notFound: true,
    }
  }

  const { borders } = country;

  const borderCountries = await Promise.all(
    borders.map(async (border) => {
      const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${border}`);
      return await response.json();
    })
  );

  return { props: { country, borderCountries } }
}
