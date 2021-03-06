import Link from 'next/link'

const CountryCard = ({ country: { name } }) => {
    return (
        <div>
            <Link
                href={{
                    pathname: '/countries/[name]',
                    query: { name: encodeURIComponent(name.toLowerCase()) },
                }}
            >
                {name}
            </Link>
        </div>
    );
};

export default CountryCard;