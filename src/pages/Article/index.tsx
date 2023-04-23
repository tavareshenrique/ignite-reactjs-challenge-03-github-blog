import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import remarkGfm from 'remark-gfm';

import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { usePost } from '../../hooks';

import { Link, Badge } from '../../components';

import { IPostData } from '../../hooks/usePost/@interfaces';

import {
  ArticleBody,
  ArticleHeader,
  LinksContent,
  Title,
  Markdown,
} from './styles';

export function Article() {
  const { slug } = useParams<{ slug: string }>();

  const { findPostBySlug /* isLoadingPostBySlug */ } = usePost();

  const [post, setPost] = useState<IPostData | null>(null);

  // if (!slug) {
  //   // TODO: Not found page here

  //   return <h1>404 - Not Found</h1>;
  // }

  useEffect(() => {
    async function fetchPost() {
      const post = await findPostBySlug(slug as string);

      setPost(post);
    }

    if (slug && post === null) {
      fetchPost();
    }
  }, [findPostBySlug, post, slug]);

  return (
    <>
      <ArticleHeader>
        <LinksContent>
          <Link href="/">
            <FaChevronLeft size={12} />
            <span>VOLTAR</span>
          </Link>
          <Link href={post?.link || '/'} target="_blank">
            <span>VER NO GITHUB</span>
            <FaExternalLinkAlt size={12} />
          </Link>
        </LinksContent>

        <Title>{post?.title}</Title>

        <Badge.Root>
          <Badge.Badge
            ariaLabel="Nome de usuário no Github"
            icon={<FaGithub size={16} />}
            text={post?.username || 'Não informado'}
          />
          <Badge.Badge
            ariaLabel="Foi publicado há 1 dia."
            icon={<FaCalendarDay size={16} />}
            text={post?.publishTime || 'Não informado'}
          />
          <Badge.Badge
            ariaLabel="Possui 5 comentários."
            icon={<FaComment size={16} />}
            text={`${post?.comments} comentarios`}
          />
        </Badge.Root>
      </ArticleHeader>

      <ArticleBody>
        <Markdown
          children={post?.body || 'Carregando...'}
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => (
              <img style={{ maxWidth: '100%' }} {...props} />
            ),
          }}
        />
      </ArticleBody>
    </>
  );
}
