export interface ResponseData<T = any> {
  statusCode: number;
  message: string;
  data?: T;
}

export function responseJson<T>(code: number, text: string): ResponseData<T>;
export function responseJson<T>(
  code: number,
  text: string,
  json: T,
): ResponseData<T>;

export function responseJson<T>(
  code: number,
  text: string,
  json?: T,
): ResponseData<T> {
  if (json) {
    return {
      statusCode: code,
      message: text,
      data: json,
    };
  } else {
    return {
      statusCode: code,
      message: text,
    };
  }
}
