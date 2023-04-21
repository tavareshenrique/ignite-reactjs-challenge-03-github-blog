import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {
  ProfileBarContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileInfoGroup,
} from '../styles';

export default function ProfileBarSkeleton() {
  return (
    <SkeletonTheme baseColor="#605f5f" highlightColor="#444">
      <ProfileBarContainer>
        <Skeleton height={148} width={148} />

        <ProfileInfoContent>
          <ProfileInfoGroup>
            <Skeleton count={1} width={100} height={25} />

            <Skeleton count={1} width={100} height={25} />
          </ProfileInfoGroup>

          <ProfileDescription>
            <Skeleton count={2} />
          </ProfileDescription>

          <Skeleton count={3} />
        </ProfileInfoContent>
      </ProfileBarContainer>
    </SkeletonTheme>
  );
}
