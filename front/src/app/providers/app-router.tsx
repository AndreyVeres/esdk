import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config } from './router.config';
import { Suspense } from 'react';

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        {Object.values(config).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
