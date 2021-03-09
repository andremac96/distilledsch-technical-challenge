import React from 'react';
import { shallow, mount } from 'enzyme';
import BorderCountryCard from '../components/BorderCountryCard';

const fakeItem = {
    name: "Ireland",
    capital: "Dublin",
    region: "Europe",
    population: 6378000,
    borders: [
    "GBR"
    ],
    currencies: [
        {
            code: "EUR",
            name: "Euro",
            symbol: "€"
        }
    ],
    languages: [
        {
            iso639_1: "ga",
            iso639_2: "gle",
            name: "Irish",
            nativeName: "Gaeilge"
        },
        {
            iso639_1: "en",
            iso639_2: "eng",
            name: "English",
            nativeName: "English"
        }
    ],
    flag: "https://restcountries.eu/data/irl.svg",
    regionalBlocs: [
        {
            acronym: "EU",
            name: "European Union",
            otherAcronyms: [ ],
            otherNames: [ ]
        }
    ],
    cioc: "IRL"
}

it('renders the border country image', () => {
    const wrapper = shallow(<BorderCountryCard country={fakeItem} />);
    const img = wrapper.find('.image-wrapper-border-country img');
    expect(img.src).toBe(fakeItem.image);
});

it('renders at least one country stat', () => {
    const wrapper = shallow(<BorderCountryCard country={fakeItem} />);
    const statList = wrapper.find('.country-stats');
    expect(statList.length).toBeGreaterThanOrEqual(1);
});