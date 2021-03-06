export default function Post({ country: { flag, name, capital, currencies, population, languages, }, borderCountries }) {
  return (
    <div>
      {name}
      <ul>
        <li>{flag}</li>
        <li>{capital}</li>
        <li>{currencies[0].code}</li>
        <li>{population}</li>
        <li>{languages[0].name}</li>
      </ul>

      <h2>Borders:</h2>
      {borderCountries.length
        ? borderCountries.map(country => (
          <div>
            <p>{country.name}</p>
            <p>{country.population}</p>
            <p>{country.flag}</p>
          </div>
        )) : null}
    </div>
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
