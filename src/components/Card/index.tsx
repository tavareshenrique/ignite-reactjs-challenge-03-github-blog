import { CardSkeleton } from './CardSkeleton';

import { ICardProps } from './@interfaces';

import {
  CardSection,
  CardBody,
  CardContainer,
  CardHeader,
  PublishTime,
  Title,
} from './styles';

function Card({ post }: ICardProps) {
  return (
    <CardContainer to={post.link}>
      <CardHeader>
        <Title>{post.title}</Title>
        <PublishTime>{post.publishTime}</PublishTime>
      </CardHeader>

      <CardBody>{post.body}</CardBody>
    </CardContainer>
  );
}

const Root = CardSection;

const Base = Card;

const Skeleton = CardSkeleton;

export { Root, Base, Skeleton };
