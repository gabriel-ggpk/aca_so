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
        result = { message: 'Email registrado, porém não confirmado' };
      } else {
        result = { message: 'Something went wrong' };
      }
    }
    return result;
  }
}