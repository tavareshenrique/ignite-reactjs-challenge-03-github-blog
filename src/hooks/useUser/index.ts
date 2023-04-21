import { useEffect, useState } from 'react';

import api from '../../services/api';

import { IUser, IGithubApiUser } from './@interfaces';

export function useUser() {
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    api
      .get<IGithubApiUser>('/users/tavareshenrique')
      .then((response) => {
        const parsingUser = {
          avatar_url: response.data.avatar_url,
          bio: response.data.bio,
          company: response.data.company,
          followers: response.data.followers,
          profile_url: response.data.html_url,
          username: response.data.login,
          name: response.data.name,
        };

        setUser(parsingUser);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingUser(false);
      });
  }, []);

  return {
    user,
    isLoadingUser,
  };
}
