import styled from 'styled-components';

export const NotFoundContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  margin: 200px auto;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
    line-height: 120%;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-text']};
    line-height: 150%;

    word-wrap: break-word;
    text-align: center;

    margin: 1rem 0;

    a {
      color: ${({ theme }) => theme.blue};

      &:hover {
        text-decoration: underline;
        opacity: 0.7;
        transition: all 0.2s;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 80%;

    margin: 50px auto;

    img {
      width: 100%;
    }
  }
`;
