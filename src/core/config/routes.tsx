import { lazy } from 'react';

import RouteInterface from "../interfaces/route";

const Login = lazy(() => import('@/pages/login/'));
const Register = lazy(() => import('@/pages/register/'));
const confirmEmail = lazy(() => import('@/pages/confirmEmail/'));
const Home = lazy(() => import('@/pages/home/'));

const routes: RouteInterface[]  = [
  {
    url: '/',
    component: Login,
  },
  {
    url: '/register',
    component: Register,
  },
  {
    url: '/confirmEmail',
    component: confirmEmail,
  },
  {
    url: '/home',
    component: Home,
  },
];

export default routes;
