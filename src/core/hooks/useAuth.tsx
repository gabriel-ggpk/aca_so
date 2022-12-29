import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDetailedInfo } from '../interfaces/user';
import AuthServices from '../service/auth';
import LocalService from '../service/locals';
import UserServices from '../service/user';

export default function useAuth():[UserDetailedInfo, boolean] {
  const [user, setUser] = useState({} as UserDetailedInfo);
  const [loading, setLoading] = useState(true);
  const [userCreated, setUserCreated] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();
  useEffect(
    () => {
      if (userCreated && !refresh) {
        try {
          const localUser = LocalService.getUser();
          // se o usuario não tiver localstorage, redireciona para a tela de login
          if (!localUser.user?.id) {
            navigate('/');
            return;
          }
          // se o usuario tiver localstorage, tenta buscar os dados dele
          UserServices.getUser(localUser.user.id).then((response) => {
            if (response.error) {
              switch (response.error) {
                case '0001':
                  setUserCreated(false);
                  break;
                case '0019':
                  setRefresh(true);
                  break;
                case '0021':
                  navigate('/');
                  break;
                default:
                  navigate('/');
                  break;
              }
              return;
            }
            setUser(response.data);
            setLoading(false);
          });
        } catch (error:any) {
          navigate('/');
        }
      }
    },

    [userCreated, refresh],
  );
  useEffect(() => {
    //
    if (refresh) {
      AuthServices.refreshToken(LocalService.getUser().token.refresh_token).then((res) => {
        LocalService.updateLocalAccessToken({
          access_token: res.data.access_token,
          id_token: res.data.id_token,
        });
        setRefresh(false);
      });
    }
  }, [refresh]);

  useEffect(() => {
    if (!userCreated) {
      UserServices.createUser(LocalService.getUser().user.id).then(() => {
        setUserCreated(true);
      });
    }
  }, [userCreated]);
  return [user, loading];
}
