import BorderCountryCard from '../../components/BorderCountryCard';
import CountryDetailsPanel from '../../components/CountryDetailsPanel';
import CountryPage from '../../components/styles/CountryPage';
import Layout from '../../components/styles/Layout';

import Link from 'next/link';
import { useRouter } from 'next/router'


export default function Country({ country: {capital, flag, name, population, currencies, languages, regionalBlocs}, borderCountries }) {
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

        <CountryDetailsPanel 
          capital={capital} 
          currencies={currencies} 
          languages={languages} 
          name={name} 
          population={population} 
          regionalBlocs={regionalBlocs} 
        />

        <h2>Borders</h2>
        <div className="border-countries">
          {borderCountries.length
            ? borderCountries.map(country => (
              <BorderCountryCard country={country} key={country.name} />
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
