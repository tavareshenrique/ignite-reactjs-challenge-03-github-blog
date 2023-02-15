import * as Avatar from '@radix-ui/react-avatar';

import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa';

import {
  ProfileBarContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileInfoGroup,
  ProfileName,
  Link,
  ProfileBadgesContent,
  ProfileBadges,
} from './styles';

export function ProfileBar() {
  return (
    <ProfileBarContainer>
      <Avatar.Root className="avatar-container">
        <Avatar.Image
          className="avatar-container__image"
          src="http://github.com/tavareshenrique.png"
          alt="Provavelmente é a foto de uma pessoa."
        />
      </Avatar.Root>

      <ProfileInfoContent>
        <ProfileInfoGroup>
          <Link
            href="/profile"
            role="link"
            aria-label="Acesse ao perfil do Github do Henrique Tavares."
          >
            Github
            <FaExternalLinkAlt size={12} />
          </Link>

          <ProfileName>Henrique Tavares</ProfileName>
        </ProfileInfoGroup>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>

        <ProfileBadgesContent>
          <ProfileBadges aria-label="Nome de usuário no Github do Henrique Tavares.">
            <FaGithub size={16} />
            <span>tavareshenrique</span>
          </ProfileBadges>
          <ProfileBadges aria-label="Nome de organização que o Henrique Tavares trabalha.">
            <FaBuilding size={16} />
            <span>Getninjas</span>
          </ProfileBadges>
          <ProfileBadges aria-label="Número de seguidores do Henrique Tavares no Github.">
            <FaUserFriends size={16} />
            <span>32 seguidores</span>
          </ProfileBadges>
        </ProfileBadgesContent>
      </ProfileInfoContent>
    </ProfileBarContainer>
  );
}
