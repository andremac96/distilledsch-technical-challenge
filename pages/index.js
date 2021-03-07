import CountryCard from '../components/CountryCard';
import Layout from '../styles/Layout';
import { useEffect } from 'react';

export default function Home({ countries }) {
  // useEffect(() => {
  //   console.log('using use effect')
  // });
  return (
    <main>
      <Layout>
        <div className="wrapper">
          <div className="country-card-wrapper">
            {countries.map(country => (
              <CountryCard country={country} key={country.name}/>
            ))}
          </div>
        </div>
      </Layout>
    </main>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const countries = await res.json()

  if (!countries) {
    return {
      notFound: true,
    }
  }

  return {
    props: { countries }
  }
}