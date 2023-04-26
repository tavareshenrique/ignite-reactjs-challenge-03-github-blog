import { useParams, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

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

import { ArticleSkeleton } from './ArticleSkeleton';

import {
  ArticleBody,
  ArticleHeader,
  LinksContent,
  Title,
  Markdown,
} from './styles';
import { useEffect } from 'react';

export function Article() {
  const { slug } = useParams<{ slug: string }>();

  const navigate = useNavigate();

  const { isLoadingPostBySlug, selectedPost } = usePost(slug);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!selectedPost) {
        navigate('/404');
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoadingPostBySlug, navigate, selectedPost]);

  if (isLoadingPostBySlug || !selectedPost) {
    return <ArticleSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>Github Blog | {selectedPost?.title || ''}</title>
      </Helmet>

      <ArticleHeader>
        <LinksContent>
          <Link href="/">
            <FaChevronLeft size={12} />
            <span>VOLTAR</span>
          </Link>
          <Link href={selectedPost?.link || '/'} target="_blank">
            <span>VER NO GITHUB</span>
            <FaExternalLinkAlt size={12} />
          </Link>
        </LinksContent>

        <Title>{selectedPost?.title}</Title>

        <Badge.Root>
          <Badge.Badge
            ariaLabel="Nome de usuário no Github"
            icon={<FaGithub size={16} />}
            text={selectedPost?.username || 'Não informado'}
          />
          <Badge.Badge
            ariaLabel="Foi publicado há 1 dia."
            icon={<FaCalendarDay size={16} />}
            text={selectedPost?.publishTime || 'Não informado'}
          />
          <Badge.Badge
            ariaLabel="Possui 5 comentários."
            icon={<FaComment size={16} />}
            text={`${selectedPost?.comments} comentarios`}
          />
        </Badge.Root>
      </ArticleHeader>

      <ArticleBody>
        <Markdown
          children={selectedPost?.body || 'Carregando...'}
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
