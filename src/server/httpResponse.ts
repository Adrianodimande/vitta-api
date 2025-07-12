import { json } from "stream/consumers";

export class HttpResponse {
    public readonly status: number;
  public readonly isError: boolean;
  public readonly message: string;
  public readonly data: any;

  constructor(status: number, isError: boolean, message: string, data: any) {
    this.status = status;
    this.isError = isError;
    this.message = message;
    this.data = data;
  }
}