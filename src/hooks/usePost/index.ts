import { useEffect, useState } from 'react';
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

export function usePost(slug?: string) {
  const [initialPosts, setInitialPosts] = useState<IPost[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IPostData | null>(null);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [isLoadingPostBySlug, setIsLoadingPostBySlug] = useState(true);

  useEffect(() => {
    setIsLoadingPosts(true);

    api
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
        setPosts(parsingPosts);
        setIsLoadingPosts(false);
      });
  }, []);

  useEffect(() => {
    if (slug) {
      setIsLoadingPostBySlug(true);

      const issueNumber = posts.find(
        (post) => post.slug === slug,
      )?.issue_number;

      // if (!issueNumber) {

      //   return;
      // }

      api
        .get<IGithubApiPost>(
          `${import.meta.env.VITE_REPO_ENDPOINT}/${String(issueNumber)}`,
        )
        .then((response) => {
          const parsedPost = {
            title: response.data.title,
            publishTime: formatDistanceToNow(
              new Date(response.data.created_at),
              {
                addSuffix: true,
                locale: ptBR,
              },
            ),
            comments: response.data.comments,
            body: response.data.body,
            username: response.data.user.login,
            link: response.data.html_url,
          } satisfies IPostData;

          setSelectedPost(parsedPost);
          setIsLoadingPostBySlug(false);
        })
        .finally(() => {
          setIsLoadingPostBySlug(false);
        });
    }
  }, [posts, slug]);

  const totalPosts = posts.length ?? 0;

  const searchPostsDebounced = useDebounce(searchPosts, 500);

  function searchPosts(search: string) {
    if (search === '') {
      return setPosts(initialPosts);
    }

    const filteredPosts = initialPosts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });

    setPosts(filteredPosts);
  }

  return {
    posts,
    selectedPost,
    totalPosts,
    isLoadingPosts,
    isLoadingPostBySlug,
    searchPosts: searchPostsDebounced,
  };
}
