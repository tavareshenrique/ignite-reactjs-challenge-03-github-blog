import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';

import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { NotFound } from './pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
