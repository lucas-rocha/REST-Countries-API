import {
  Container,
  Image,
  InfoBody,
  InfoList,
  InfoListItem,
  Title,
} from './style';

const CountryGridItem = ({ flag, name, population, region, capital }) => (
  <Container>
    <Image src={flag} />
    <InfoBody>
      <Title>{name}</Title>
      <InfoList>
        <InfoListItem>
          <b>Population:</b> {population.toLocaleString('en-US')}
        </InfoListItem>
        <InfoListItem>
          <b>Region:</b> {region}
        </InfoListItem>
        <InfoListItem>
          <b>Capital:</b> {capital}
        </InfoListItem>
      </InfoList>
    </InfoBody>
  </Container>
);

export default CountryGridItem;
