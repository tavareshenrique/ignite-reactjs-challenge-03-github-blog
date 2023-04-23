import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

export const ArticleHeader = styled.header`
  padding: 32px;
  margin-top: -8rem;

  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${({ theme }) => theme['base-title']};
`;

export const ArticleBody = styled.main`
  margin-top: 40px;

  padding: 0 32px;
`;

export const Markdown = styled(ReactMarkdown)`
  white-space: break-spaces;

  font-size: 1rem;
  font-weight: 400;
  line-height: 25.6px;

  color: ${({ theme }) => theme['base-text']};

  a {
    color: ${({ theme }) => theme.blue};
  }
`;
