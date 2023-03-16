import styled from 'styled-components';

export const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.blue};

  font-size: 0.75rem;
  text-decoration: none;

  svg {
    margin: 0 8px;
    color: ${({ theme }) => theme.blue};
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }

  @media (max-width: 768px) {
    font-size: 0.625rem;
  }
`;
