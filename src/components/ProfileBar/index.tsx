import * as Avatar from '@radix-ui/react-avatar';

import { ProfileBarContainer } from './styles';

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
    </ProfileBarContainer>
  );
}
