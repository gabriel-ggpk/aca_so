import http from '@/http-common';
import { IResponse } from '../interfaces/response';

export default class RegisterServices {
  static async createUser(user: any): Promise<IResponse> {
    let result;
    try {
      result = await http.post<any>('/auth/sign-up', {
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        first_name: user.firstName,
        last_name: user.lastName,
      });
    } catch (error: any) {
      const code = error.response.data.code.split('.')[2];
      switch (code) {
        case '0009':
          result = { data: { code }, message: 'Email já cadastrado.' };
          break;
        case '0010':
          result = { data: { code }, message: 'Email já cadastrado, mas não confirmado' };
          break;
        default:
          result = { data: { code }, message: 'Erro interno.' };
          break;
      }
    }
    return result;
  }

  static async verifyEmail(user: any): Promise<IResponse> {
    let result;
    try {
      result = await http.post<any>('/auth/confirm-sign-up', {
        email: user.email,
        confirmation_code: user.code,
      });
    } catch (error: any) {
      const code = error.response.data.code.split('.')[2];
      if (code === '0004') {
        result = { data: { code }, message: 'Código inválido.' };
      } else {
        result = { data: { code }, message: 'Erro interno.' };
      }
    }
    return result;
  }

  static async resendVerificationEmail(email: any): Promise<IResponse> {
    let result;
    try {
      result = await http.post<any>('/auth/resend-confirmation-code', {
        email,
      });
    } catch (error: any) {
      result = { data: { code: 500 }, message: 'Erro interno.' };
    }
    return result;
  }
}
