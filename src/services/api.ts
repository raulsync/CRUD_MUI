import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:5000/users';

export interface IDataType {
  name: string;
  username: string;
  email: string;
  phone: string;
  id: string;
}

export type ApiRespone = IDataType[];

export const addUser = async (
  data: IDataType,
): Promise<AxiosResponse<IDataType> | undefined> => {
  try {
    return await axios.post(API_URL, data);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log('Error message:', e.message);
    } else {
      console.log('Unknown error:', e);
    }
  }
  return undefined;
};

export const getUsers = async (): Promise<
  AxiosResponse<ApiRespone> | undefined
> => {
  try {
    return await axios<ApiRespone>('http://localhost:5000/users');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log('Some Api Error', error.message);
    } else {
      console.log('Unknown Error', error);
    }
  }
  return undefined;
};
