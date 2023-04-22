import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '../../services/api';

import { useDebounce } from '../useDebounce';

import { IGithubApiPosts, IPost } from './@interfaces';

export function usePost() {
  const [initialPosts, setInitialPosts] = useState<IPost[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  const { isLoading, data } = useQuery('postsData', () =>
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
              locale: ptBR,
            }),
            link: 'article/' + post.id,
          };
        });

        setInitialPosts(parsingPosts);

        return parsingPosts;
      }),
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setPosts(data);
    }
  }, [data]);

  const totalPosts = posts.length ?? 0;

  const searchPostsDebounced = useDebounce(searchPosts, 500);

  function searchPosts(search: string) {
    if (search === '') {
      return setPosts(initialPosts);
    }

    const filteredPosts = initialPosts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });

    console.log(filteredPosts);

    setPosts(filteredPosts);
  }

  return {
    posts,
    totalPosts,
    isLoadingPosts: isLoading,
    searchPosts: searchPostsDebounced,
  };
}
