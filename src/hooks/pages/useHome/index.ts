import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import api from '../../../services/api';

import { useDebounce } from '../../useDebounce';

import { IUser, IGithubApiUser, IGithubApiPosts, IPost } from './@interfaces';

export function useHome() {
  // const [isLoadingData, setIsLoadingData] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [initialPosts, setInitialPosts] = useState<IPost[]>([]);

  const totalPosts = posts.length ?? 0;

  const searchPostsDebounced = useDebounce(searchPosts, 500);

  function searchPosts(search: string) {
    if (search === '') {
      return setPosts(initialPosts);
    }

    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });

    setPosts(filteredPosts);

    return filteredPosts;
  }

  useEffect(() => {
    // setIsLoadingData(true);

    Promise.all([
      api.get<IGithubApiUser>('/users/tavareshenrique'),
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

        const parsingUser = {
          avatar_url: userResponse.data.avatar_url,
          bio: userResponse.data.bio,
          company: userResponse.data.company,
          followers: userResponse.data.followers,
          profile_url: userResponse.data.html_url,
          username: userResponse.data.login,
          name: userResponse.data.name,
        };

        setUser(parsingUser);
        setPosts(parsingPosts);
        setInitialPosts(parsingPosts);
      })
      .finally(() => {
        // setIsLoadingData(false);
      });
  }, []);

  return {
    user,
    posts,
    totalPosts,
    searchPosts: searchPostsDebounced,
  };
}
