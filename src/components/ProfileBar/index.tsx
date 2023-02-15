import * as Avatar from '@radix-ui/react-avatar';

import { FaExternalLinkAlt } from 'react-icons/fa';

import {
  ProfileBarContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileInfoGroup,
  ProfileName,
  Link,
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
      </ProfileInfoContent>
    </ProfileBarContainer>
  );
}
