import { lazy } from 'react';
import RouteInterface from "../interfaces/route";

// Carrega as rotas de forma lazy
const Login = lazy(() => import('@/pages/login/'));
const Register = lazy(() => import('@/pages/register/'));
const confirmEmail = lazy(() => import('@/pages/confirmEmail/'));
const Home = lazy(() => import('@/pages/home/'));

//cria um array de rotas que sera usado no pelo react-router-dom
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
