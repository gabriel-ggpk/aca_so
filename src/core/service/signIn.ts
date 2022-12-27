import http from '@/http-common';

interface FormRequest {
  data?: any;
  message?: string;
}

export default class AuthServices {
  static async login(user: any): Promise<FormRequest> {
    let result;
    try {
      result = await http.post<any>('/auth/login', {
        email: user.email,
        password: user.password,
      });
      result = { data: result.data };
    } catch (error: any) {
      switch (error.response.status) {
        case 400:
          result = { message: 'Invalid email or password' };
          break;
        case 401:
          result = { message: 'Invalid email or password' };
          break;
        default:
          result = { message: 'Something went wrong' };
      }
    }
    return result;
  }
}
