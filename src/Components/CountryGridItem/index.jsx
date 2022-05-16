import {
  Container,
  Image,
  InfoBody,
  InfoList,
  InfoListItem,
  Title,
} from './style';

const CountryGridItem = () => (
  <Container>
    <Image src="https://flagcdn.com/w320/br.png" />
    <InfoBody>
      <Title>Brazil</Title>
      <InfoList>
        <InfoListItem>
          <b>Population:</b> 206,135,893
        </InfoListItem>
        <InfoListItem>
          <b>Region:</b> Americas
        </InfoListItem>
        <InfoListItem>
          <b>Capital:</b> Brasília
        </InfoListItem>
      </InfoList>
    </InfoBody>
  </Container>
);

export default CountryGridItem;
