import { createContext, useContext } from 'react';
import Token from '../interfaces/token';

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  groups: string[];
};

export type UserContext = {
  token: Token,
  user: User,
  setToken: (token:Token) => void;
  setUser: (user:User) => void;
  refreshToken: () => void;
};

export const GlobalUserContext = createContext<UserContext>({
  token: {
    access_token: '',
    id_token: '',
    refresh_token: '',
  },
  user: {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    groups: [],
  },
  setToken: () => {},
  setUser: () => {},
  refreshToken: () => {},
});

export const useUserContext = () => useContext(GlobalUserContext);
