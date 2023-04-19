import { useEffect, useState } from 'react';

import { formatDistanceToNow } from 'date-fns';

import { Card, ProfileBar, SearchBar } from '../../components';

import api from '../../services/api';

import { IGithubApiAvatar, IGithubApiPosts, IPost } from './@interfaces';

import { CardSection } from './styles';

export function Home() {
  // const [isLoadingData, setIsLoadingData] = useState(true);
  const [user, setUser] = useState<IGithubApiAvatar>({} as IGithubApiAvatar);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // setIsLoadingData(true);

    Promise.all([
      api.get<IGithubApiAvatar>('/users/tavareshenrique'),
      api.get<IGithubApiPosts[]>(
        '/repos/tavareshenrique/ignite-reactjs-challenge-03-github-blog/issues',
      ),
    ])
      .then((responses) => {
        const [userResponse, postsResponse] = responses;

        const parsingPosts = postsResponse.data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body.slice(0, 200),
            publishTime: formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
            }),
            link: 'article/' + post.id,
          };
        });

        console.log(parsingPosts);

        setUser(userResponse.data);
        setPosts(parsingPosts);
      })
      .finally(() => {
        // setIsLoadingData(false);
      });
  }, []);

  return (
    <>
      <ProfileBar user={user} />

      <SearchBar />

      <CardSection>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardSection>
    </>
  );
}
