import styled from 'styled-components';

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
