import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import api from '../../services/api';

import { useDebounce } from '../useDebounce';

import { IGithubApiPosts, IPost } from './@interfaces';

export function usePost() {
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
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
    api
      .get<IGithubApiPosts[]>(
        '/repos/tavareshenrique/ignite-reactjs-challenge-03-github-blog/issues',
      )
      .then((response) => {
        const parsingPosts = response.data.map((post) => {
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

        setPosts(parsingPosts);
        setInitialPosts(parsingPosts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingPosts(false);
      });
  }, []);

  return {
    posts,
    totalPosts,
    isLoadingPosts,
    searchPosts: searchPostsDebounced,
  };
}
