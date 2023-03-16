import styled from 'styled-components';

export const BadgeStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 8px;

    font-size: 1rem;
    line-height: 160%;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  svg {
    color: ${({ theme }) => theme['base-label']};
  }

  @media (max-width: 768px) {
    span {
      font-size: 0.75rem;
      margin-left: 4px;
    }
  }
`;

export const BadgeRootStyle = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;

  div + div {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    div + div {
      margin-left: 0px;
    }
  }
`;
