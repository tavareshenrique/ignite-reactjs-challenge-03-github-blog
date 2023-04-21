import { Card, ProfileBar, SearchBar } from '../../components';

import { useHome } from '../../hooks/';

import { CardSection } from './styles';

export function Home() {
  const { posts } = useHome();

  return (
    <>
      <ProfileBar />

      <SearchBar />

      <CardSection>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardSection>
    </>
  );
}
