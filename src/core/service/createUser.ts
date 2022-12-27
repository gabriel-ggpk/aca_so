import http from '@/http-common';

interface FormRequest {
  data?: any;
  message?: string;
}

export default class CreateUserServices {
  static async createUser(user: any): Promise<FormRequest> {
    let result;
    try {
      result = await http.post<any>('/auth/sign-up', {
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        first_name: user.firstName,
        last_name: user.lastName,
      });
      result = { data: result.data };
    } catch (error: any) {
      if (error.response.status === 400) {
        result = { data: { code: 400 }, message: 'Email registrado, porém não confirmado.' };
      } else {
        result = { data: { code: 500 }, message: 'Erro interno.' };
      }
    }
    return result;
  }

  static async verifyEmail(user: any): Promise<FormRequest> {
    let result;
    try {
      result = await http.post<any>('/auth/confirm-sign-up', {
        email: user.email,
        confirmation_code: user.code,
      });
      result = { data: result.data };
    } catch (error: any) {
      if (error.response.status === 400) {
        result = { data: { code: 400 }, message: 'Código inválido.' };
      } else {
        result = { data: { code: 500 }, message: 'Erro interno.' };
      }
    }
    return result;
  }
}
