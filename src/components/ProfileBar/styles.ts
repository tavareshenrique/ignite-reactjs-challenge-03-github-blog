import styled from 'styled-components';

export const ProfileBarContainer = styled.div`
  width: 100%;
  height: 13rem;

  padding: 32px 40px;
  margin-top: -8rem;

  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
`;
