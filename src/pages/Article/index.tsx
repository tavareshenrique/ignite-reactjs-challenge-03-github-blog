import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { Link, Badge } from '../../components';

import { ArticleHeader, LinksContent, Title } from './styles';

export function Article() {
  return (
    <>
      <ArticleHeader>
        <LinksContent>
          <Link href="/">
            <FaChevronLeft size={12} />
            <span>Voltar</span>
          </Link>
          <Link href="/">
            <span>VER NO GITHUB</span>
            <FaExternalLinkAlt size={12} />
          </Link>
        </LinksContent>

        <Title>JavaScript data types and data structures</Title>

        <Badge.Root>
          <Badge.Badge
            ariaLabel="Nome de usuário no Github do Henrique Tavares."
            icon={<FaGithub size={16} />}
            text="tavareshenrique"
          />
          <Badge.Badge
            ariaLabel="Foi publicado há 1 dia."
            icon={<FaCalendarDay size={16} />}
            text="Há 1 dia"
          />
          <Badge.Badge
            ariaLabel="Possui 5 comentários."
            icon={<FaComment size={16} />}
            text="5 comentarios"
          />
        </Badge.Root>
      </ArticleHeader>
    </>
  );
}
