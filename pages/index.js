import CountryCard from '../components/CountryCard';
import Layout from '../styles/Layout';

export default function Home({ countries }) {
  return (
    <Layout> 
      {countries.map(country => (
        <CountryCard country={country} key={country.name}/>
      ))}
    </Layout>

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