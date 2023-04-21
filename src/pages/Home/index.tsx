import emptyImage from '../../assets/empty.svg';

import { Card, ProfileBar, SearchBar } from '../../components';

import { usePost } from '../../hooks/';

export function Home() {
  const { posts, isLoadingPosts, totalPosts, searchPosts } = usePost();

  return (
    <>
      <ProfileBar />

      <SearchBar totalPosts={totalPosts} searchPosts={searchPosts} />

      {posts.length === 0 ? (
        <Card.Empty />
      ) : (
        <Card.Root>
          {isLoadingPosts && <Card.Skeleton />}

          {posts.length === 0 && <img src={emptyImage} alt="" />}

          {posts.map((post) => (
            <Card.Base key={post.id} post={post} />
          ))}
        </Card.Root>
      )}
    </>
  );
}
