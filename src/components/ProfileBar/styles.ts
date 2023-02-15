import styled from 'styled-components';

export const ProfileBarContainer = styled.div`
  width: 100%;
  height: 13rem;

  padding: 32px 40px;
  margin-top: -8rem;

  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  .avatar-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 148px;
    height: 148px;
    border-radius: 8px;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
`;
