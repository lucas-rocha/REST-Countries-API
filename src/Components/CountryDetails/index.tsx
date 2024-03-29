import Button from '../Button';
import LoadingSpinner from '../LoadingSpinner';

import {
  Container,
  Details,
  DetailsFooter,
  DetailsFooterButton,
  DetailsList,
  Image,
  Title,
} from './styles';

interface Props {
  flag: string;
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: string;
  languages: string;
  borders: [];
  isLoading: boolean;
}

const CountryDetails: React.FC<Props> = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
  isLoading,
}) => (
  <Container>
    {isLoading && <LoadingSpinner />}
    <Image src={flag} />
    <Details>
      <Title>{name}</Title>
      <DetailsList>
        <li>
          <b>Native Name: </b>
          {nativeName}
        </li>
        <li>
          <b>Population: </b> {population}
        </li>
        <li>
          <b>Region: </b> {region}
        </li>
        <li>
          <b>Sub Region: </b> {subregion}
        </li>
        <li>
          <b>Capital:</b> {capital}
        </li>
      </DetailsList>
      <DetailsList>
        <li>
          <b>Top Level Domain: </b> {tld}
        </li>
        <li>
          <b>Currencies: </b>
          {currencies}
        </li>
        <li>
          <b>Languages: </b>
          {languages}
        </li>
      </DetailsList>
      {borders && (
        <DetailsFooter>
          <h3>Border Countries:</h3>
          <DetailsFooterButton>
            {borders.map((border) => (
              <Button text={border} key={border} />
            ))}
          </DetailsFooterButton>
        </DetailsFooter>
      )}
    </Details>
  </Container>
);

export default CountryDetails;
