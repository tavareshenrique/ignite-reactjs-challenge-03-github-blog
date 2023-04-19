import { ICardProps } from './@interfaces';

import {
  CardBody,
  CardContainer,
  CardHeader,
  PublishTime,
  Title,
} from './styles';

export function Card({ post }: ICardProps) {
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
