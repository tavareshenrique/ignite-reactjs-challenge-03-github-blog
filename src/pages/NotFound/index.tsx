import { Helmet } from 'react-helmet';
import { StatusCode } from 'react-http-status-code';

import notFoundImage from '../../assets/404.svg';

import { NotFoundContainer } from './styles';

export function NotFound() {
  return (
    <StatusCode code={404}>
      <Helmet>
        <title>Página Não Encontrada</title>
      </Helmet>

      <NotFoundContainer>
        <h1>Ops! Está perdido?</h1>
        <p>
          A página que você está procurando não existe. Mas não se preocupe,
          você pode voltar para a página inicial clicando <a href="/">aqui</a>.
        </p>
        <img
          src={notFoundImage}
          alt="Os números 404 em um fundo azul"
          width={400}
          height={400}
        />
      </NotFoundContainer>
    </StatusCode>
  );
}
