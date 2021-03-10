import { useState } from 'react';
import Head from 'next/head';

import CountryCard from '../components/CountryCard';
import Layout from '../components/Layout';

export default function Home({ countryData }) {
  const [countries, setCountries] = useState(countryData);

  function handleSearch(e){
    const term = e.target.value.toLowerCase();

    if(!term || term.length < 1){
      setCountries(countryData);
    }

    const filteredCountries = countryData.filter(country => country.name.toLowerCase().includes(term));
    setCountries(filteredCountries);
  }

  return (
    <main>
      <Head>
        <title>Country App</title>
        <script src="https://use.fontawesome.com/dc46986e94.js"></script>
        <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />

      </Head>
      <Layout>
        <div className="search">
          <input 
            onChange={(e) => handleSearch(e)}
            placeholder="Filter by name"
          />
        </div>

        <div className="wrapper">
          <div className="country-card-wrapper">
          
            {countries.length ? countries.map(country => (
              <CountryCard country={country} key={country.name}/>
            )) : <p>No countires found</p>}
          </div>
        </div>
      </Layout>
    </main>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const countryData = await res.json()

  if (!countryData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { countryData }
  }
}