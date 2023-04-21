import { Card, ProfileBar, SearchBar } from '../../components';

import { usePost } from '../../hooks/';

import { CardSection } from './styles';

export function Home() {
  const { posts } = usePost();

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
