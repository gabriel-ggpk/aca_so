import http from '@/http-common';

interface FormRequest {
  data?: any;
  error?: string;
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
    } catch (error: any) {
      const code = error.response.data.code.split('.')[2];
      switch (code) {
        case '0002':
          result = { error: code, message: 'Senha incorreta' };
          break;
        case '0008':
          result = { error: code, message: 'Email não registrado' };
          break;
        default:
          result = { error: code, message: 'Erro interno.' };
          break;
      }
    }
    return result;
  }
}
