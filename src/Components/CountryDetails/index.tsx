import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByName } from '../../Api/Services/Countries';

import Button from '../Button';

import {
  Container,
  Details,
  DetailsFooter,
  DetailsFooterButton,
  DetailsList,
  Image,
  Title,
} from './styles';

interface CountryItem {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: string;
  borders: [];
}

const CountryDetails: React.FC = () => {
  const [country, setCountry] = useState<CountryItem>();
  const { countryName } = useParams();

  useEffect(() => {
    getCountryByName(countryName)
      .then((response) => {
        setCountry(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [countryName]);

  return (
    (country && (
      <Container>
        <Image src={country.flags.svg} />
        <Details>
          <Title>{country.name.common}</Title>
          <DetailsList>
            <li>
              <b>Native Name: </b>
              {
                country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                  .official
              }
            </li>
            <li>
              <b>Population: </b> {country.population.toLocaleString('en')}
            </li>
            <li>
              <b>Region: </b> {country.region}
            </li>
            <li>
              <b>Sub Region: </b> {country.subregion}
            </li>
            <li>
              <b>Capital:</b> {country.capital}
            </li>
          </DetailsList>
          <DetailsList>
            <li>
              <b>Top Level Domain: </b> {country.tld}
            </li>
            <li>
              <b>Currencies: </b>
              {country.currencies &&
                country.currencies[Object.keys(country.currencies)[0]].name}
            </li>
            <li>
              <b>Languages: </b>
              {Object.values(country.languages).toString()}
            </li>
          </DetailsList>
          {country.borders && (
            <DetailsFooter>
              <h3>Border Countries:</h3>
              <DetailsFooterButton>
                {country.borders.map((border) => (
                  <Button text={border} key={border} />
                ))}
              </DetailsFooterButton>
            </DetailsFooter>
          )}
        </Details>
      </Container>
    )) ||
    null
  );
};

export default CountryDetails;
