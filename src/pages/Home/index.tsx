import { Card, ProfileBar, SearchBar } from '../../components';
import { CardSection } from './styles';

export function Home() {
  return (
    <>
      <ProfileBar />

      <SearchBar />

      <CardSection>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardSection>
    </>
  );
}
