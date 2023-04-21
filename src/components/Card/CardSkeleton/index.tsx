import { SkeletonBase } from '../..';

import { CardBody, CardHeader } from '../styles';

import { CardSekeletonContainer } from './styles';

const skeletonArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export function CardSkeleton() {
  return (
    <>
      {skeletonArray.map((skeleton) => (
        <SkeletonBase.Root key={skeleton.id}>
          <CardSekeletonContainer>
            <CardHeader>
              <SkeletonBase.Skeleton count={1} width={350} />
            </CardHeader>

            <CardBody>
              <SkeletonBase.Skeleton count={5} width={350} />
            </CardBody>
          </CardSekeletonContainer>
        </SkeletonBase.Root>
      ))}
    </>
  );
}
