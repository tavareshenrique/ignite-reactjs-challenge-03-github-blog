import { useQuery } from 'react-query';

import api from '../../services/api';

import { IUser, IGithubApiUser } from './@interfaces';

export function useUser() {
  const { isLoading, data } = useQuery<IUser>({
    queryKey: 'userData',
    queryFn: async () => {
      return api
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

          return parsingUser;
        });
    },
    refetchOnWindowFocus: false,
  });

  return {
    user: data,
    isLoadingUser: isLoading,
  };
}
