import * as Avatar from '@radix-ui/react-avatar';

import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa';

import { Badge, Link } from '../';

import {
  ProfileBarContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileInfoGroup,
  ProfileName,
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
            href="https://github.com.br/tavareshenrique"
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

        <Badge.Root>
          <Badge.Badge
            ariaLabel="Nome de usuário no Github do Henrique Tavares."
            icon={<FaGithub size={16} />}
            text="tavareshenrique"
          />
          <Badge.Badge
            ariaLabel="Nome de organização que o Henrique Tavares trabalha."
            icon={<FaBuilding size={16} />}
            text="Getninjas"
          />
          <Badge.Badge
            ariaLabel="Número de seguidores do Henrique Tavares no Github."
            icon={<FaUserFriends size={16} />}
            text="32 seguidores"
          />
        </Badge.Root>
      </ProfileInfoContent>
    </ProfileBarContainer>
  );
}
