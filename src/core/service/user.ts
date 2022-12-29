import http from '@/http-common';
import { IResponse } from '../interfaces/response';

export default class UserServices {
  static async createUser(userId: string): Promise<IResponse> {
    let result;
    try {
      result = await http.post<any>('/user/', {
        id: userId,
      });
    } catch (error: any) {
      const code = error.response.data.code.split('.')[2];
      result = { error: code, message: 'Erro interno.' };
    }
    return result;
  }

  static async getUser(id:string): Promise<IResponse> {
    let result;
    try {
      result = await http.get<any>(
        `/user/${id}`,
      );
    } catch (error: any) {
      const code = error.response.data.code.split('.')[2];
      switch (code) {
        case '0019':
          result = { error: code, message: 'Token Expirado' };
          break;
        case '0001':
          result = { error: code, message: 'Usuario não encontrado' };
          break;
        default:
          result = { error: code, message: 'Erro interno.' };
          break;
      }
    }
    return result;
  }
}
