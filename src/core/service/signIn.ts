import http from '@/http-common';

export default class AuthServices {
  static async login(user: any) {
    const result = await http.post<any>('/auth/login', {
      email: user.email,
      password: user.password,
    });
    if (result.status === 400) {
      console.log(result);
    }
  }
}
