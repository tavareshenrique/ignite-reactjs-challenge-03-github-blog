import { CardSkeleton } from './CardSkeleton';

import emptyImage from '../../assets/empty.svg';

import { ICardProps } from './@interfaces';

import {
  CardSection,
  CardContainerEmpty,
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

function Empty() {
  return (
    <CardContainerEmpty>
      <img
        src={emptyImage}
        alt="Ilustração de um homem bebendo uma caneca de café"
        width={200}
        height={200}
      />

      <p>Nenhuma publicação foi encontrada.</p>
    </CardContainerEmpty>
  );
}

const Root = CardSection;

const Base = Card;

const Skeleton = CardSkeleton;

export { Root, Base, Skeleton, Empty };
