import { useEffect, useState } from 'react';
import Head from 'next/head';

import CountryCard from '../components/CountryCard';
import Layout from '../components/Layout';

export default function Home({ countryData }) {
  const [countries, setCountries] = useState(countryData);
  // const [population, setPopulation] = useState(null);

  // function handleChange(e){
  //   const pop = e.target.value;
  //   console.log(pop)
  //   const newCountries = countryData.filter(country => country.population > pop);

  //   setCountries(newCountries);
  //   // console.log(newCountries);
  // }

  return (
    <main>
      <Head>
        <title>Country App</title>
        <script src="https://use.fontawesome.com/dc46986e94.js"></script>
        <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />

      </Head>
      <Layout>
      {/* <input onChange={(e) => handleChange(e)} /> */}

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