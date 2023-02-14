import { Outlet } from 'react-router-dom';

import { Header } from '../../components';

import { Content } from './styles';

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </>
  );
}
