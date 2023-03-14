import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 415px;
  height: 260px;

  padding: 32px;

  background-color: ${({ theme }) => theme['base-post']};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 160%;

  width: 75%;

  color: ${({ theme }) => theme['base-title']};

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 130%;
  }
`;

export const PublishTime = styled.span`
  font-size: 0.875rem;
  line-height: 160%;

  margin-top: 4px;

  color: ${({ theme }) => theme['base-span']};

  @media (max-width: 768px) {
    font-size: 0.75rem;
    line-height: 130%;
  }
`;

export const CardBody = styled.p`
  font-size: 1rem;
  line-height: 160%;

  margin-top: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 130%;
  }
`;
