import styled from 'styled-components';

export const CardSekeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 415px;
  height: 260px;

  border: 2px solid transparent;
  border-radius: 10px;
  text-decoration: none;

  padding: 32px;

  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
