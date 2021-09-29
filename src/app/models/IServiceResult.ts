import { IError } from './IError';

export interface IServiceResult<T> {
  data: T,
  codeId: number,
  message: string,
  isSuccess: boolean,
  errors: Array<IError>,
}