import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '../../services/api';

import { useDebounce } from '../useDebounce';

import {
  IGithubApiPost,
  IGithubApiPosts,
  IPost,
  IPostData,
} from './@interfaces';

export function usePost() {
  const [initialPosts, setInitialPosts] = useState<IPost[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoadingPostBySlug, setIsLoadingPostBySlug] = useState(false);

  const { isLoading, data } = useQuery<IPost[]>({
    queryKey: 'postsData',
    queryFn: async () => {
      return api
        .get<IGithubApiPosts[]>(import.meta.env.VITE_REPO_ENDPOINT)
        .then((response) => {
          const parsingPosts = response.data.map((post) => {
            const { id, number, title, body } = post;

            const bodyFormatted = body.slice(0, 200);

            const slug = title.toLowerCase().replace(/ /g, '-');

            const publishTime = formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            });

            const link = `article/${slug}`;

            return {
              id,
              issue_number: number,
              title,
              body: bodyFormatted,
              publishTime,
              slug,
              link,
            } as IPost;
          });

          setInitialPosts(parsingPosts);

          return parsingPosts;
        });
    },
    refetchOnWindowFocus: false,
  });

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

  async function findPostBySlug(slug: string) {
    setIsLoadingPostBySlug(true);

    const issueNumber = posts.find((post) => post.slug === slug)?.issue_number;

    if (!issueNumber) {
      return null;
    }

    const post = await api.get<IGithubApiPost>(
      `${import.meta.env.VITE_REPO_ENDPOINT}/${String(issueNumber)}`,
    );

    const parsedPost = {
      title: post.data.title,
      publishTime: formatDistanceToNow(new Date(post.data.created_at), {
        addSuffix: true,
        locale: ptBR,
      }),
      comments: post.data.comments,
      body: post.data.body,
      username: post.data.user.login,
      link: post.data.html_url,
    } satisfies IPostData;

    setIsLoadingPostBySlug(false);

    return parsedPost;
  }

  return {
    posts,
    totalPosts,
    isLoadingPosts: isLoading,
    searchPosts: searchPostsDebounced,
    findPostBySlug,
    isLoadingPostBySlug,
  };
}
