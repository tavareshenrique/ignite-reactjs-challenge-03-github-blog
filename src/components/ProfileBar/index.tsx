import { useEffect, useState } from 'react';

import * as Avatar from '@radix-ui/react-avatar';

import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa';

import api from '../../services/api';

import { Badge, Link } from '../';

import {
  ProfileBarContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileInfoGroup,
  ProfileName,
} from './styles';
import { IGithubApiAvatar } from './@interfaces';

export function ProfileBar() {
  const [user, setUser] = useState<IGithubApiAvatar>({} as IGithubApiAvatar);

  useEffect(() => {
    api.get<IGithubApiAvatar>('/users/tavareshenrique').then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <ProfileBarContainer>
      <Avatar.Root className="avatar-container">
        <Avatar.Image
          className="avatar-container__image"
          src={`http://github.com/${user.login}.png`}
          alt="Provavelmente é a foto de uma pessoa."
        />
      </Avatar.Root>

      <ProfileInfoContent>
        <ProfileInfoGroup>
          <Link
            href={user.html_url}
            role="link"
            aria-label={`Acesse ao perfil do Github do ${user.name}.`}
          >
            Github
            <FaExternalLinkAlt size={12} />
          </Link>

          <ProfileName>{user.name}</ProfileName>
        </ProfileInfoGroup>
        <ProfileDescription>{user.bio}</ProfileDescription>

        <Badge.Root>
          <Badge.Badge
            ariaLabel={`Nome de usuário do Github do ${user.name}.`}
            icon={<FaGithub size={16} />}
            text={user.login}
          />
          <Badge.Badge
            ariaLabel={`Empresa onde o ${user.name} trabalha.`}
            icon={<FaBuilding size={16} />}
            text={user.company}
          />
          <Badge.Badge
            ariaLabel={`Quantidade de seguidores do ${user.name}.`}
            icon={<FaUserFriends size={16} />}
            text={`${user.followers} seguidores`}
          />
        </Badge.Root>
      </ProfileInfoContent>
    </ProfileBarContainer>
  );
}
