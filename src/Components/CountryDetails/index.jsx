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

const CountryDetails = () => (
  <Container>
    <Image src="https://flagcdn.com/br.svg" />
    <Details>
      <Title>Brazil</Title>
      <DetailsList>
        <li>
          <b>Native Name:</b> Brazil
        </li>
        <li>
          <b>Population:</b> 212,245,121
        </li>
        <li>
          <b>Region:</b> Americas
        </li>
        <li>
          <b>Sub Region:</b> South America
        </li>
        <li>
          <b>Capital:</b> Brasília
        </li>
      </DetailsList>
      <DetailsList>
        <li>
          <b>Native Name:</b> Brazil
        </li>
        <li>
          <b>Population:</b> 212,245,121
        </li>
        <li>
          <b>Region:</b> Americas
        </li>
      </DetailsList>
      <DetailsFooter>
        <h3>Border Countries:</h3>
        <DetailsFooterButton>
          <Button text="Argentina" />
        </DetailsFooterButton>
      </DetailsFooter>
    </Details>
  </Container>
);

export default CountryDetails;
