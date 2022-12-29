import Token from '../interfaces/token';

export default class LocalService {
  static getLocalRefreshToken() {
    const user = localStorage.getItem('user');
    if (!user) return '';
    return JSON.parse(user).token.refresh_token;
  }

  static getLocalAccessToken() {
    const user = localStorage.getItem('user');
    if (!user) return '';
    return JSON.parse(user).token.id_token;
  }

  static updateLocalAccessToken(token: Partial<Token>) {
    const user = localStorage.getItem('user');
    if (user) {
      const newToken = JSON.parse(user);
      newToken.token.id_token = token.id_token;
      newToken.token.access_token = token.access_token;
      console.log(newToken);
      localStorage.setItem('user', JSON.stringify(newToken));
    }
  }

  static addLocalUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static getUser() {
    const user = localStorage.getItem('user');
    if (!user) return '';
    return JSON.parse(user);
  }

  static removeUser() {
    localStorage.removeItem('user');
  }
}
