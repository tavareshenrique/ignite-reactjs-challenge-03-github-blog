import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CardSection = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled(Link)`
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

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme['base-label']};
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

  text-align: start;

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

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  text-align: left;

  color: ${({ theme }) => theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 130%;
  }
`;
