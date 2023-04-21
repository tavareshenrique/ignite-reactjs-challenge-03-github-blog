import { SkeletonBase } from '../..';

import {
  ProfileBarContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileInfoGroup,
} from '../styles';

export default function ProfileBarSkeleton() {
  return (
    <SkeletonBase.Root>
      <ProfileBarContainer>
        <SkeletonBase.Skeleton height={148} width={148} />

        <ProfileInfoContent>
          <ProfileInfoGroup>
            <SkeletonBase.Skeleton count={1} width={100} height={25} />

            <SkeletonBase.Skeleton count={1} width={100} height={25} />
          </ProfileInfoGroup>

          <ProfileDescription>
            <SkeletonBase.Skeleton count={2} />
          </ProfileDescription>

          <SkeletonBase.Skeleton count={3} />
        </ProfileInfoContent>
      </ProfileBarContainer>
    </SkeletonBase.Root>
  );
}
