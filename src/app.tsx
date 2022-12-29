/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { Suspense, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './core/config/routes';
import {
  GlobalUserContext, UserContext,
} from './core/context/userContext';
import RouteInterface from './core/interfaces/route';
import Token from './core/interfaces/token';
import { User } from './core/interfaces/user';
import AuthServices from './core/service/auth';
import GlobalStyles from './globalStyles';

export default function AppRoutes(): JSX.Element {
  const [user, setUser] = React.useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    groups: [],
  } as User);
  const [token, setToken] = React.useState({
    access_token: '',
    refresh_token: '',
    id_token: '',
  } as Token);
  return (
    <GlobalUserContext.Provider value={useMemo<UserContext>(() => ({
      user,
      token,
      setUser,
      setToken,
      refreshToken: () => {
        AuthServices.refreshToken(token.refresh_token).then((res) => {
          setToken({ ...token, access_token: res.data.access_token, id_token: res.data.id_token });
        });
      },
    }), [user, token])}
    >
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback="">
          <Routes>{RouterComponents}</Routes>
        </Suspense>
      </BrowserRouter>
    </GlobalUserContext.Provider>

  );
}
const RouterComponents = routes.map(
  ({ url, component }: RouteInterface): JSX.Element => (
    <Route key={url} path={url} element={React.createElement(component)} />
  ),
);
