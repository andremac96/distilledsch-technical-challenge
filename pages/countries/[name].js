import CountryPage from '../../styles/CountryPage';
import Layout from '../../styles/Layout';
import Link from 'next/link';
import {numberWithCommas} from '../../lib/utils';
import { useRouter } from 'next/router'

export default function Post({ country: {capital, flag, name, population, currencies, languages, regionalBlocs}, borderCountries }) {
  const router = useRouter();

  return (
    <Layout background="fff">
      <CountryPage>
        <h1>Country App</h1>
        <Link
          href={{
            pathname: "/",
          }}
        >
        <button onClick={() => router.back()}>Back</button>
      </Link>
        <div className="image-wrapper">
            <img src={flag} />
        </div>
        <div className="country-details">
          <div><strong>{name}</strong></div>
          <div>Capital: {capital}</div>
          <div>Regional Blocs: {regionalBlocs.map(bloc => bloc.name)}</div>

          <div>Population: {numberWithCommas(population)}</div>
          <div>
            Currency: {currencies.length ? currencies.map(currency => (
              <span>{currency.code} ({currency.symbol})</span>
            )) : null}
          </div>
          <div>
            Languages: {languages.length ? languages.map((language, index) => (
              <span>
                {language.name} ({language.iso639_1})
                {(languages.length > 1 && (index != [languages.length -1])) ? ', ' : null}
              </span>
            )) : null}
          </div>
        </div>
        
        <h2>Borders</h2>
        <div className="border-countries">
          {borderCountries.length
            ? borderCountries.map(country => (
            <div className="border-country">
            
              <div className="image-wrapper-border-country">
                <img src={country.flag} />
              </div>
              <div><strong>{country.name.replace(/(\(.+\))/g, '')}</strong></div>
              <div>{numberWithCommas(country.population)}</div>
              <div>
                {country.regionalBlocs.length ? country.regionalBlocs.map((bloc, index) => (
                  <span>
                    {bloc.name}
                    {(country.regionalBlocs.length > 1 && (index != [country.regionalBlocs.length -1])) ? ', ' : null}
                  </span>
                )) : null}
              </div>
              {/* <button className="see-more">See More</button> */}

            
            </div>
            
           )) : <h3 style={{textAlign: "left"}}>This country has no border countries!</h3>}
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
