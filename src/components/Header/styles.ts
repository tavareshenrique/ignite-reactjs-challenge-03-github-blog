import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 296px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme['base-profile']};
`;
