export default function Post({ country }) {
  return (
    <div>
      {country.name}
    </div>
  )
}



export async function getServerSideProps(context) {
  const { name } = context.params;
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
  const countryRes = await res.json();

  const country = countryRes[0];

  if (!country) {
    return {
      notFound: true,
    }
  }

  return {
    props: { country }
  }
}
