import styled from 'styled-components';

export const ProfileBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 13rem;

  padding: 32px 40px;
  margin-top: -8rem;

  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  .avatar-container {
    flex: 1;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    max-width: 148px;
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

  @media (max-width: 768px) {
    align-items: center;

    flex-direction: column;
    height: 25rem;

    .avatar-container {
      width: 80px;
      height: 80px;

      margin-bottom: 24px;
    }
  }
`;

export const ProfileInfoContent = styled.div`
  flex: 2;

  margin-left: 34px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const ProfileInfoGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.blue};

  font-size: 0.75rem;
  text-decoration: none;

  svg {
    margin-left: 8px;
    color: ${({ theme }) => theme.blue};
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }

  @media (max-width: 768px) {
    font-size: 0.625rem;
  }
`;

export const ProfileName = styled.span`
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: bold;
  color: ${({ theme }) => theme['base-title']};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProfileDescription = styled.p`
  margin-top: 8px;

  font-size: 1rem;
  line-height: 160%;
  font-weight: 400;
  color: ${({ theme }) => theme['base-text']};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ProfileBadgesContent = styled.div`
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

export const ProfileBadges = styled.div`
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
