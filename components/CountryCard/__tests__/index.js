import React from 'react';
import { shallow, mount } from 'enzyme';
import CountryCard from '../index';

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

it('renders the country name', () => {
    const wrapper = shallow(<CountryCard country={fakeItem} />);
    expect(wrapper.find('h2.country-name').length).toEqual(1);
});

it('renders the image properly', () => {
    const wrapper = shallow(<CountryCard country={fakeItem} />);
    const img = wrapper.find('.image-wrapper img');
    expect(img.src).toBe(fakeItem.image);
});

  it('renders out the see more button', () => {
        const wrapper = shallow(<CountryCard country={fakeItem} />);
        const buttonList = wrapper.find('.buttonList');
        expect(buttonList.children()).toHaveLength(1);
        expect(buttonList.find('Link')).toHaveLength(1);
        expect(buttonList.find('button').exists()).toBe(true);
        expect(buttonList.find('button').text()).toBe('See More');
    });

  it('renders out country informaTION', () => {
        const wrapper = shallow(<CountryCard country={fakeItem} />);
        const informationList = wrapper.find('.country-information');
        expect(informationList.children()).toHaveLength(3);
        expect(informationList.find('i.fa').exists()).toBe(true);
    });

