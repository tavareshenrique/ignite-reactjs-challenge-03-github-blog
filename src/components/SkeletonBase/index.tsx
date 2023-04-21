import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { ISkeletonBaseProps } from './@interfaces';

function SkeletonBase({ children }: ISkeletonBaseProps) {
  return (
    <SkeletonTheme baseColor="#605f5f" highlightColor="#444">
      {children}
    </SkeletonTheme>
  );
}

const Root = SkeletonBase;

export { Root, Skeleton };
