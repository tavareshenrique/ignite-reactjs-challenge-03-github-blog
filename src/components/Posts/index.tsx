import { usePost } from '../../hooks';

import { Card, SearchBar } from '..';

export function Posts() {
  const { posts, isLoadingPosts, totalPosts, searchPosts } = usePost();

  return (
    <>
      <SearchBar totalPosts={totalPosts} searchPosts={searchPosts} />

      {posts.length === 0 && !isLoadingPosts ? (
        <Card.Empty />
      ) : (
        <Card.Root>
          {isLoadingPosts && <Card.Skeleton />}

          {posts.map((post) => (
            <Card.Base key={post.id} post={post} />
          ))}
        </Card.Root>
      )}
    </>
  );
}
