import {
  CardBody,
  CardContainer,
  CardHeader,
  PublishTime,
  Title,
} from './styles';

export function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <Title>JavaScript data types and data structures</Title>
        <PublishTime>Há 1 dia</PublishTime>
      </CardHeader>

      <CardBody>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </CardBody>
    </CardContainer>
  );
}
