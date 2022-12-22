/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './core/config/routes';
import RouteInterface from './core/interfaces/route';
import GlobalStyle from './globalStyles';

export default function AppRoutes(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback="">
          <Routes>{RouterComponents}</Routes>
        </Suspense>
      </BrowserRouter>
    </>

  );
}
const RouterComponents = routes.map(
  ({ url, component }: RouteInterface): JSX.Element => (
    <Route key={url} path={url} element={React.createElement(component)} />
  ),
);
