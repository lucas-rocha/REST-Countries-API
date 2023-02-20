import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import { getCountryByName } from '../../Api/Services/Countries';
import BackButton from '../../Components/BackButton';
import CountryDetails from '../../Components/CountryDetails';
import ErrorFallback from '../../Components/ErrorFallback';

import { Container } from './styles';

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

const CountryDetail: React.FC = () => {
  const [country, setCountry] = useState<CountryItem>();
  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();

  useEffect(() => {
    getCountryByName(countryName)
      .then((response) => {
        setCountry(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  }, [countryName]);

  return (
    <div className="container">
      <Container>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BackButton />
          <div>
            {country && (
              <CountryDetails
                flag={country.flags.svg}
                name={country.name.common}
                nativeName={
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].official
                }
                population={country.population.toLocaleString('en')}
                region={country.region}
                subregion={country.subregion}
                capital={country.capital}
                tld={country.tld}
                currencies={
                  country.currencies[Object.keys(country.currencies)[0]].name
                }
                borders={country.borders}
                languages={Object.values(country.languages).toString()}
                isLoading={isLoading}
              />
            )}
          </div>
        </ErrorBoundary>
      </Container>
    </div>
  );
};

export default CountryDetail;
