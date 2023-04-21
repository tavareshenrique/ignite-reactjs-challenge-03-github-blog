import { Card, ProfileBar, SearchBar } from '../../components';

import { usePost } from '../../hooks/';

export function Home() {
  const { posts, isLoadingPosts } = usePost();

  return (
    <>
      <ProfileBar />

      <SearchBar />

      <Card.Root>
        {isLoadingPosts && <Card.Skeleton />}

        {posts.map((post) => (
          <Card.Base key={post.id} post={post} />
        ))}
      </Card.Root>
    </>
  );
}
