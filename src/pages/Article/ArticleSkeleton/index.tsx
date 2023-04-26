import { SkeletonBase } from '../../../components';

import { ArticleHeader, LinksContent } from '../styles';
import { BadgesContainerSkeleton } from './styles';

export function ArticleSkeleton() {
  return (
    <SkeletonBase.Root>
      <ArticleHeader>
        <LinksContent>
          <SkeletonBase.Skeleton count={1} width={350} />

          <SkeletonBase.Skeleton count={1} width={350} />
        </LinksContent>

        <SkeletonBase.Skeleton count={1} height={40} />

        <BadgesContainerSkeleton>
          <SkeletonBase.Skeleton count={1} width={200} />
          <SkeletonBase.Skeleton count={1} width={200} />
          <SkeletonBase.Skeleton count={1} width={200} />
        </BadgesContainerSkeleton>
      </ArticleHeader>

      <SkeletonBase.Skeleton count={20} />
    </SkeletonBase.Root>
  );
}
