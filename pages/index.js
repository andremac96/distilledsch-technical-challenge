import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CountryCard from '../components/CountryCard';

export default function Home({ countries }) {
  return (
    <div> 
      {countries.map(country => (
        <CountryCard country={country} key={country.name}/>
      ))}
    </div>
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