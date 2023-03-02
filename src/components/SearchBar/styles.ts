import styled from 'styled-components';

export const SearchBarContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 4.5rem 0px 3rem 0;

  width: 100%;
`;

export const SearchBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .label-container {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`;

export const PostCountText = styled.span`
  font-size: 0.875rem;
  line-height: 160%;

  color: ${({ theme }) => theme['base-span']};
`;

export const SearchBarInput = styled.input`
  height: 50px;
  width: 100%;

  margin-top: 12px;
  padding: 16px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-border']};

  background-color: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
`;
